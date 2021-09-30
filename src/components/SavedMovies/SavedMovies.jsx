import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

function SavedMovies() {
    return(
        <section className="saved-movies">
            <SearchForm place="saved" />
            <MoviesCardList place="saved" />
        </section>
    );
}

export default SavedMovies;
