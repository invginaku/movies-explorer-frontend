import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';

function SearchForm() {
    return(
        <section className="search">
            <form className="search__form">
                <div className="search__input-wrapper">
                    <button className="search__button search__button-white" type="submit" />
                    <input className="search__input" type="text" placeholder="Фильм" required />
                    <button className="search__button search__button-black" type="submit" />
                </div>
                <div className="search__checkbox-wrapper">
                    <FilterCheckbox />
                    <p className="search__checkbox-label">Короткометражки</p>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;
