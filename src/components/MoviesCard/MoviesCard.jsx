import './MoviesCard.css';

import LikeButton from '../LikeButton/LikeButton.jsx';

function MoviesCard({ picture, title, duration, likeType }) {
    return(
        <article className="card">
            <img className="card__picture" src={picture} alt="Иллюстрация к фильму" />
            <div className="card__label">
                <div className="card__main">
                    {/* <p className="card__title">{title}</p> */}
                    <p className="card__title">33 слова о дизайне</p>
                    <LikeButton type={likeType} />
                </div>
                {/* <p className="card__duration">{duration}</p> */}
                <p className="card__duration">1ч42м</p>
            </div>
        </article>
    );
}

export default MoviesCard;
