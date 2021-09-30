import './Movies.css';

import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

function Movies() {
    return(
        <section className="movies">
            <SearchForm place="movies" />
            <MoviesCardList place="movies" />
        </section>
    );
}

export default Movies;
