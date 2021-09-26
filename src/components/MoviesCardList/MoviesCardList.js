import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
    return(
        <section className="movies">
            {/* <ul className="movies__grid">
         {props.cards.map((item) => (
           <li className="movies__item" key={item._id}>
             <MoviesCard
               picture={item.picture}
               title={item.title}
               duration={item.duration}
             />
           </li>
         ))}
       </ul> */}
            <ul className="movies__grid">
                <li className="movies__item" key={1}>
                    <MoviesCard />
                </li>
                <li className="movies__item" key={2}>
                    <MoviesCard />
                </li>
                <li className="movies__item" key={3}>
                    <MoviesCard />
                </li>
                <li className="movies__item" key={4}>
                    <MoviesCard />
                </li>
                <li className="movies__item" key={5}>
                    <MoviesCard />
                </li>
                <li className="movies__item" key={6}>
                    <MoviesCard />
                </li>
                <li className="movies__item" key={7}>
                    <MoviesCard />
                </li>
                <li className="movies__item" key={8}>
                    <MoviesCard />
                </li>
            </ul>
            <div className="movies__more">
                <button className="movies__more-button">Ещё</button>
            </div>
        </section>
    );
}

export default MoviesCardList;
