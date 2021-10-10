import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList({
                            place,
                            moviesToShow,
                            moviesToMap,
                            moviesToAdd,
                            onGetMoreMovies,
                            notFound,
                            onLike,
                            onDislike,
                            onOpenMovieModal,
                            onSetCurrentMovie,
                        }) {

    const moviesCardLikeType = place === 'saved' ? 'remove' : 'like';

    let moviesGridClass = (moviesToShow.length >= 4) ? 'movies__grid' : 'movies__grid movies__grid_few-cards';

    const moviesArray = [...moviesToShow];

    moviesArray.length = moviesToMap;

    const showMoreButton = moviesArray.length < moviesToShow.length;

    function getMoreMovies() {
        onGetMoreMovies(moviesToMap + moviesToAdd);
    }

    return(
        <>
            {!notFound && <ul className={moviesGridClass}>
                {moviesArray.map((item) => (
                    <li className="movies__item" key={item.id || item._id}>
                    <MoviesCard
                        item={item}
                        likeType={moviesCardLikeType}
                        onLike={onLike}
                        onDislike={onDislike}
                        onOpenMovieModal={onOpenMovieModal}
                        onSetCurrentMovie={onSetCurrentMovie}
                    />
                </li>
            ))}
            </ul>}
            {showMoreButton && <div className="movies__more">
                <button className="movies__more-button" onClick={getMoreMovies}>Ещё</button>
            </div>}
            {notFound && <p className="movies__not-found">Ничего не найдено</p>}
        </>
    );
}

export default MoviesCardList;
