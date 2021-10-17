import React from 'react';
import {Route, Switch, useHistory, Redirect} from 'react-router-dom';

import './App.css';

import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';

import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';

import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';

import NotFound from '../NotFound/NotFound.jsx';

import InfoModal from '../InfoModal/InfoModal.jsx';
import MovieModal from '../MovieModal/MovieModal.jsx';

import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';

import useCurrentWidth from '../../utils/useCurrentWidth.js';
import getMoviesGridCounts from '../../utils/getMoviesGridCounts.js';
import getErrorMessage from '../../utils/getErrorMessage.js';
import filterMovies from '../../utils/filterMovies.js';

function App() {
    const history = useHistory();
    const windowWidth = useCurrentWidth();

    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(undefined);

    const [savedMovies, setSavedMovies] = React.useState(undefined);

    const [moviesToShow, setMoviesToShow] = React.useState([]);
    const [savedMoviesToShow, setSavedMoviesToShow] = React.useState([]);
    const [moviesNotFound, setMoviesNotFound] = React.useState(false);
    const [savedMoviesNotFound, setSavedMoviesNotFound] = React.useState(false);

    const [moviesToMap, setMoviesToMap] = React.useState(0);
    const [moviesToAdd, setMoviesToAdd] = React.useState(0);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [modalState, setModalState] = React.useState({
        error: true,
        open: false,
        title: 'Внимание!',
        message: 'Что-то случилось.',
    });
    const [movieModalOpen, setMovieModalOpen] = React.useState(false);
    const [currentMovie, setCurrentMovie] = React.useState({});

    function openMenu() {
        setIsMenuOpen(true);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    const openModal = React.useCallback((
        message,
        title = 'Внимание!',
        error = true,
    ) => {
        setModalState({
            ...modalState,
            open: true,
            message,
            title,
            error
        });
    }, [modalState]);

    function closeModal() {
        setModalState({ ...modalState, open: false });
    }

    function openMovieModal() {
        setMovieModalOpen(true);
    }

    function closeMovieModal() {
        setMovieModalOpen(false);
    }

    function clearData() {
        localStorage.removeItem('searchSavedMoviesResult');
        localStorage.clear();
        setMoviesToShow([]);
        setSavedMoviesToShow([]);
        setLoggedIn(false);
        setSavedMovies(undefined);
    }

    function signUp({ name, email, password }) {
        return mainApi.signUp({ name, email, password })
            .then(() => signIn({ email, password }))
            .catch(err => openModal(getErrorMessage(err)));
    }

    function signIn({ email, password }) {
        return mainApi.signIn({ email, password })
            .then(() => {
                setLoggedIn(true);
                localStorage.setItem('loggedIn', 'true');
                history.push('/movies');
                getMovies();
            })
            .then(() => getProfileData())
            .catch(err => openModal(getErrorMessage(err)));
    }

    function signOut() {
        window.onbeforeunload = function() {};
        return mainApi.signOut()
            .then(() => clearData())
            .catch(err => openModal(getErrorMessage(err)));
    }

    function getProfileData() {
        mainApi.getUserInfo()
            .then(res => setCurrentUser(res))
            .catch(err => openModal(getErrorMessage(err)));
    }

    function editProfile(data) {
        return mainApi.patchUserInfo(data)
            .then(() => openModal('Данные успешно изменены!', 'Получилось!', false))
            .then(() => getProfileData())
            .catch(err => openModal(getErrorMessage(err)));
    }

    function getMovies() {
        return Promise.all([moviesApi.getMovies(), mainApi.getSavedMovies()])
            .then(([movies, savedMovies]) => {
                setSavedMovies(savedMovies);

                return movies.map(movie => {
                    movie.isLiked = !!savedMovies.find(savedMovie => savedMovie.movieId === movie.id);
                    return movie;
                });
            })
            .catch(err => openModal(getErrorMessage(err)));
    }

    const getSavedMovies = React.useCallback(() => {
        if (localStorage.savedMovies)
            return new Promise((resolve, reject) => {
                resolve(JSON.parse(localStorage.savedMovies));
            });
        return mainApi.getSavedMovies()
            .then(res => {
                setSavedMovies(res);
                return res;
            })
            .catch(err => openModal(getErrorMessage(err)));
    }, [openModal]);

    function searchForMovies(request, shortFilter) {
        if (localStorage.hasOwnProperty('cachedRequest') && localStorage.cachedRequest === request) {
            return new Promise((resolve, reject) => {
                let movies = moviesToShow
                if (!shortFilter && localStorage.searchMoviesResult)
                    movies = JSON.parse(localStorage.searchMoviesResult)
                resolve(filterMovies(movies, request, shortFilter));
            })
                .then(movies => {
                    setMoviesNotFound(!movies[0]);
                    setMoviesToShow(movies);
                })
                .catch(err => openModal(getErrorMessage(err)));
        }

        return getMovies()
            .then(movies => {
                localStorage.setItem('searchMoviesResult', JSON.stringify(movies));
                return filterMovies(movies, request, shortFilter);
            })
            .then(movies => {
                setMoviesNotFound(!movies[0]);
                setMoviesToShow(movies);
                localStorage.setItem('cachedRequest', request);
            })
            .catch(err => openModal(getErrorMessage(err)));
    }

    async function searchForSavedMovies(
        request,
        shortFilter,
        shouldGetSavedMovies = false,
    ) {
        let newSavedMovies = savedMovies ? [...savedMovies] : [];

        // if (shouldGetSavedMovies) {
        //     newSavedMovies = await getSavedMovies();
        // }

        const filteredSavedMovies = filterMovies(newSavedMovies, request, shortFilter);

        setSavedMoviesNotFound(!filteredSavedMovies[0]);
        setSavedMoviesToShow(filteredSavedMovies);
        localStorage.setItem('searchSavedMoviesResult', JSON.stringify(filteredSavedMovies));
    }

    function saveMovie(data) {
        return mainApi.addMovie(data)
            .then(res => {
                return getSavedMovies()
                    .then((movies) => {
                        const movieIndex = moviesToShow.findIndex(item => item.id === res.movieId);

                        let newMoviesToShow = [...moviesToShow];

                        newMoviesToShow[movieIndex].isLiked = true;

                        setMoviesToShow(newMoviesToShow);

                        let moviesResult = JSON.parse(localStorage.searchMoviesResult);
                        const index = moviesResult.findIndex(item => item.id === res.movieId);
                        if (index !== -1) {
                            moviesResult[index].isLiked = true;
                            localStorage.setItem('searchMoviesResult', JSON.stringify(moviesResult));
                        }

                        movies.push(data);
                        setSavedMovies(movies);
                    })
                    .catch(err => openModal(getErrorMessage(err)));
            })
            .catch(err => openModal(getErrorMessage(err)));
    }

    function deleteSavedMovie(movie) {
        let movieId;

        if (movie.dbId) {
            movieId = movie.movieId;
        } else {
            const movieToDelete = savedMovies.find(item => item.movieId === movie.movieId);

            if (movieToDelete) {
                movieId = movieToDelete.movieId;
            }

        }

        return mainApi.deleteSavedMovie(movieId)
            .then(res => {
                getSavedMovies().then((movies) => {
                    // delete like in movie list
                    const movieIndex = moviesToShow.findIndex(item => item.id === movieId);
                    if (movieIndex !== -1) {
                        const newMoviesToShow = [...moviesToShow];
                        newMoviesToShow[movieIndex].isLiked = false;
                        setMoviesToShow(newMoviesToShow);
                        //localStorage.setItem('searchMoviesResult', JSON.stringify(newMoviesToShow));
                    }

                    let moviesResult = JSON.parse(localStorage.searchMoviesResult);
                    let index = moviesResult.findIndex(item => item.id === movie.movieId);
                    if (index !== -1) {
                        moviesResult[index].isLiked = false;
                        localStorage.setItem('searchMoviesResult', JSON.stringify(moviesResult));
                    }

                    index = movies.findIndex(item => item.movieId === movieId);
                    movies.splice(index, 1);
                    setSavedMovies(movies);
                });

                return res;
            })
            .catch(err => openModal(getErrorMessage(err)));
    }

    React.useEffect(() => {
        if (localStorage.loggedIn === 'true') {
            mainApi.getUserInfo()
                .then(res => {
                    setCurrentUser(res);
                    setLoggedIn(true);
                    localStorage.setItem('loggedIn', 'true');
                })
                .catch(() => clearData());
        } else {
            clearData();
        }
    }, []);

    React.useEffect(() => {
        if (localStorage.searchMoviesResult) {
            setMoviesToShow(JSON.parse(localStorage.searchMoviesResult));
        }

        if (localStorage.searchSavedMoviesResult) {
            setSavedMoviesToShow(JSON.parse(localStorage.searchSavedMoviesResult));
        }
    }, []);

    React.useEffect(() => {
        const { newMoviesCount, newAddCount } = getMoviesGridCounts(windowWidth);

        setMoviesToMap(newMoviesCount);
        setMoviesToAdd(newAddCount);
    }, [windowWidth]);

    React.useEffect(() => {
        if (savedMovies) {
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            searchForSavedMovies(localStorage.savedRequest, localStorage.savedShortMovies);
        }
        else {
            localStorage.removeItem('savedMovies');
        }
    }, [savedMovies]);

    const menuProps = {
        isMenuOpen,
        onMenuOpen: openMenu,
        onMenuClose: closeMenu,
    };

    const moviesProps = {
        moviesToShow,
        moviesToMap,
        moviesToAdd,
        moviesNotFound,
        onSearchForMovies: searchForMovies,
        onGetMoreMovies: setMoviesToMap,
        onLike: saveMovie,
        onDislike: deleteSavedMovie,
        onOpenMovieModal: openMovieModal,
        onSetCurrentMovie: setCurrentMovie,
    };

    const savedMoviesProps = {
        savedMoviesToShow,
        moviesToMap,
        moviesToAdd,
        savedMoviesNotFound,
        savedMovies,
        getSavedMovies,
        setSavedMoviesToShow,
        onSearchForSavedMovies: searchForSavedMovies,
        onGetMoreMovies: setMoviesToMap,
        onDislike: deleteSavedMovie,
        onOpenMovieModal: openMovieModal,
        onSetCurrentMovie: setCurrentMovie,
    };

    return(
        <CurrentUserContext.Provider value={currentUser}>
            <Switch>
                <Route exact path="/">
                    <Main loggedIn={loggedIn} />
                </Route>
                <Route exact path="/signup">
                    {loggedIn ? (
                        <Redirect to="movies" />
                    ) : (
                    <Register onSignUp={signUp} />
                        )}
                </Route>
                <Route exact path="/signin">
                    {loggedIn ? (
                        <Redirect to="movies" />
                    ) : (
                    <Login onSignIn={signIn} />
                        )}
                </Route>
                <ProtectedRoute
                    exact path="/profile"
                    component={Profile}
                    loggedIn={loggedIn}
                    menuProps={menuProps}
                    onEditProfile={editProfile}
                    onSignOut={signOut}
                />
                <ProtectedRoute
                    exact path="/movies"
                    component={Movies}
                    loggedIn={loggedIn}
                    menuProps={menuProps}
                    {...moviesProps}
                />
                <ProtectedRoute
                    exact path="/saved-movies"
                    component={SavedMovies}
                    loggedIn={loggedIn}
                    menuProps={menuProps}
                    {...savedMoviesProps}
                />
                <Route path="/">
                    <NotFound />
                </Route>
            </Switch>
            <InfoModal state={modalState} onClose={closeModal} />
            <MovieModal
                state={movieModalOpen}
                movie={currentMovie}
                onClose={closeMovieModal}
            />
        </CurrentUserContext.Provider>
    );
}

export default App;
