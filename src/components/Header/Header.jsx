import './Header.css';

import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';

function Header({ place, isMenuOpen, onMenuOpen, onMenuClose }) {
    let headerModificator;

    switch (place) {
        case 'main': {
            headerModificator = 'header_place_main';
            break;
        }
        case 'profile': {
            headerModificator = 'header_place_profile';
            break;
        }
        default: {
            headerModificator = '';
        }
    }

    return(
        <header className={`header ${headerModificator}`}>
            <Logo />
            <Navigation
                place={place}
                isMenuOpen={isMenuOpen}
                onMenuOpen={onMenuOpen}
                onMenuClose={onMenuClose}
            />
        </header>
    );
}

export default Header;
