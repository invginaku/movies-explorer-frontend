import React from 'react';

import './Movies.css';

import Header from '../Header/Header.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Footer from '../Footer/Footer.jsx';

function Movies({
                    loggedIn,
                    menuProps,
                    moviesToShow,
                    moviesToMap,
                    moviesToAdd,
                    moviesNotFound,
                    onSearchForMovies,
                    onGetMoreMovies,
                    onLike,
                    onDislike,
                    onOpenMovieModal,
                    onSetCurrentMovie,
                }) {
    const [isLoading, setIsLoading] = React.useState(false);

    return(
        <>
            <Header
                place="movies"
                {...menuProps}
                loggedIn={loggedIn}
            />
            <section className="movies">
                <SearchForm
                    place="movies"
                    onSearch={onSearchForMovies}
                    setIsLoading={setIsLoading}
                />
                {isLoading && <Preloader />}
                {
                    !isLoading &&
                    <MoviesCardList
                        place="movies"
                        moviesToShow={moviesToShow}
                        moviesToMap={moviesToMap}
                        moviesToAdd={moviesToAdd}
                        notFound={moviesNotFound}
                        onGetMoreMovies={onGetMoreMovies}
                        onLike={onLike}
                        onDislike={onDislike}
                        onOpenMovieModal={onOpenMovieModal}
                        onSetCurrentMovie={onSetCurrentMovie}
                    />
                }
            </section>
            <Footer />
        </>
    );
}

export default Movies;
