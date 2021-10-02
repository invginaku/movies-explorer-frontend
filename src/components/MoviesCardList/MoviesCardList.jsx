import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.jsx';

import movieImages from '../../utils/movie-images.js';

function MoviesCardList({ cards, place }) {

    const savedMovieImages = [...movieImages];
    savedMovieImages.length = 3;

    const moviesCardLikeType = place === 'saved' ? 'remove' : 'like';

    return(
        <>
            {/* <ul className="movies__grid">
         {props.cards.map((item) => (
           <li className="movies__item" key={item._id}>
             <MoviesCard
               picture={item.picture}
               title={item.title}
               duration={item.duration}
               likeType={moviesCardLikeType}
             />
           </li>
         ))}
       </ul> */}
            {(place === 'movies') && <ul className="movies__grid">
                {movieImages.map((item, index) => (
                    <li className="movies__item" key={index}>
                        <MoviesCard
                            picture={item}
                            likeType={moviesCardLikeType}
                        />
                    </li>
                ))}
            </ul>}
            {(place === 'saved') && <ul className="movies__grid">
                {savedMovieImages.map((item, index) => (
                    <li className="movies__item" key={index}>
                        <MoviesCard
                            picture={item}
                            likeType={moviesCardLikeType}
                        />
                    </li>
                ))}
            </ul>}
            {place !== 'saved' && <div className="movies__more">
                <button className="movies__more-button">Ещё</button>
            </div>}
        </>
    );
}

export default MoviesCardList;
