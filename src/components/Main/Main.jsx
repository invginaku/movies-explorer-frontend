import './Main.css';

import Header from '../Header/Header.jsx';
import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Footer from '../Footer/Footer.jsx';

function Main({ loggedIn, menuProps }) {
    return(
        <>
            <Header
                place="main"
                loggedIn={loggedIn}
                {...menuProps}
            />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>
    );
}

export default Main;
