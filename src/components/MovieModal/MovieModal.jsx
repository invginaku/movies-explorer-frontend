import './MovieModal.css';

import parseDuration from '../../utils/parseDuration.js';
import getTrailerSource from '../../utils/getTrailerSource.js';

function MovieModal({ state, movie, onClose }) {
    return(
        <div className={`root__movie-modal movie-modal ${state ? '' : 'movie-modal_hidden'}`}>
            <div className="movie-modal__container">
                <button
                    className="movie-modal__close"
                    type="button"
                    onClick={onClose}
                />
                <h1 className="movie-modal__title">{movie.nameRU}</h1>
                <iframe
                    className="movie-modal__frame"
                    src={movie.trailer ? getTrailerSource(movie.trailer) : ''}
                    title={`Трейлер фильма ${movie.nameRU}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <p className="movie-modal__info">{`Режиссёр: ${movie.director}`}</p>
                <p className="movie-modal__info">{`Год: ${movie.year}`}</p>
                <p className="movie-modal__info">{`Страна: ${movie.country}`}</p>
                <p className="movie-modal__info">{`Длительность: ${parseDuration(movie.duration)}`}</p>
                <p className="movie-modal__description">{movie.description}</p>
            </div>
        </div>
    );
}

export default MovieModal;
