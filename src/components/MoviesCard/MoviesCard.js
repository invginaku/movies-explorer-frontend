import './MoviesCard.css';

import LikeButton from '../LikeButton/LikeButton.js';
import testPicture from '../../images/test.png'

function MoviesCard(props) {
    return(
        <article className="card">
            {/* <img className="card__picture" src={props.picture} alt="Иллюстрация к фильму" /> */}
            <img className="card__picture" src={testPicture} alt="Иллюстрация к фильму" />
            <div className="card__label">
                {/* <p className="card__title">{props.title}</p> */}
                <div className="card__main">
                    <p className="card__title">33 слова о дизайне</p>
                    <LikeButton />
                    {/* <p className="card__duration">{props.duration}</p> */}
                </div>
                <p className="card__duration">1ч42м</p>
            </div>
        </article>
    );
}

export default MoviesCard;
