import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

import Menu from '../Menu/Menu.jsx';

function Navigation({
                        place,
                        isMenuOpen,
                        onMenuOpen,
                        onMenuClose
                    }) {
    return(
        <>
            <nav className="navigation">
                <ul className={`navigation__links navigation__links_place_${place}`}>
                    <li className="navigation__list-item">
                        <NavLink
                            className="navigation__page-link"
                            activeClassName="navigation__page-link_active"
                            to="/movies"
                        >
                            Фильмы
                        </NavLink>
                    </li>
                    <li className="navigation__list-item">
                        <NavLink
                            className="navigation__page-link"
                            activeClassName="navigation__page-link_active"
                            to="/saved-movies"
                        >
                            Сохранённые фильмы
                        </NavLink>
                    </li>
                </ul>
                <ul className={`navigation__buttons navigation__buttons_place_${place}`}>
                    {(place === 'main') && <li className="navigation__list-item navigation__list-item_type_button">
                        <Link
                            className="navigation__profile-link navigation__profile-link_type_register"
                            to="/signup"
                        >
                            Регистрация
                        </Link>
                    </li>}
                    {(place === 'main') && <li className="navigation__list-item navigation__list-item_type_button">
                        <Link
                            className="navigation__profile-link navigation__profile-link_type_login"
                            to="/signin"
                        >
                            Войти
                        </Link>
                    </li>}
                    {(place !== 'main') && <li className="navigation__list-item navigation__list-item_type_button">
                        <Link
                            className="navigation__profile-link navigation__profile-link_type_profile"
                            to="/profile"
                        >
                            Аккаунт

                            <button className="navigation__profile-btn" />
                        </Link>
                    </li>}
                </ul>
                {(place !== 'main') && <button className="navigation__menu" type="button" onClick={onMenuOpen} />}
            </nav>
            <Menu isVisible={isMenuOpen} onClose={onMenuClose} />
        </>
    );
}

export default Navigation;
