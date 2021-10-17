import './MoviesCard.css';

import LikeButton from '../LikeButton/LikeButton.jsx';

import parseDuration from '../../utils/parseDuration.js';

function MoviesCard({
                        item,
                        likeType,
                        onLike,
                        onDislike,
                        onOpenMovieModal,
                        onSetCurrentMovie,
                    }) {
    const {
        director,
        year,
        description,
        nameRU,
    } = item;

    const dbId = item._id;
    const movieId = item.id || item.movieId;
    const country = item.country || 'Неизвестно';
    const nameEN = item.nameEN || 'Неизвестно';
    const image = (item.image && item.image.url && `https://api.nomoreparties.co${item.image.url}`) || item.image;
    const duration = item.duration;
    const thumbnail = (item.image && item.image.formats && `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`) || item.thumbnail;
    let trailer = item.trailerLink || item.trailer;
    if (typeof(trailer) !== 'string' || trailer.substr(0, 4) !== 'http' ) {
        trailer = 'https://youtube.com';
    }

    const movie = {
        director,
        country,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        dbId,
        movieId,
        nameRU,
        nameEN,
    };

    function handleLike() {
        return onLike(movie);
    }

    function handleDislike() {
        return onDislike(movie);
    }

    function handleMovieModal() {
        onSetCurrentMovie(movie);
        onOpenMovieModal();
        window.scrollTo(0, 0);
    }

    return(
        <article className="card">
            <button className="card__button" type="button" onClick={handleMovieModal}>
                <img className="card__picture" src={image} alt="Иллюстрация к фильму" />
            </button>
            <div className="card__label">
                <div className="card__main">
                    <p className="card__title">{nameRU}</p>
                    <LikeButton
                        type={likeType}
                        isLiked={item.isLiked}
                        onLike={handleLike}
                        onDislike={handleDislike}
                    />
                </div>
                <p className="card__duration">{parseDuration(duration)}</p>
            </div>
        </article>
    );
}

export default MoviesCard;
