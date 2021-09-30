import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';

import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';

import NotFound from '../NotFound/NotFound.jsx';

import InfoModal from '../InfoModal/InfoModal.jsx';

function App() {
    const [isMenuOpen, setisMenuOpen] = React.useState(false);

    function openMenu() {
        setisMenuOpen(true);
    }

    function closeMenu() {
        setisMenuOpen(false);
    }

    const [infoModalState, setInfoModalState] = React.useState({
        open: false,
        title: 'Внимание!',
        message: 'Что-то случилось.',
    });

    function openInfoModal(message) {
        setInfoModalState({ ...infoModalState, open: true, message });
    }

    function closeInfoModal() {
        setInfoModalState({ ...infoModalState, open: false });
    }

  return(
      <>
          <Switch>
              <Route exact path="/">
                  <Header place="main" />
                  <Main />
                  <Footer />
              </Route>
              <Route exact path="/profile">
                  <Header
                      place="profile"
                      isMenuOpen={isMenuOpen}
                      onMenuOpen={openMenu}
                      onMenuClose={closeMenu}
                  />
                  <Profile
                      onEmptyButtonClick={openInfoModal}
                  />
              </Route>
              <Route exact path="/signup">
                  <Register />
              </Route>
              <Route exact path="/signin">
                  <Login />
              </Route>
              <Route exact path="/movies">
                  <Header
                      place="movies"
                      isMenuOpen={isMenuOpen}
                      onMenuOpen={openMenu}
                      onMenuClose={closeMenu}
                  />
                  <Movies />
                  <Footer />
              </Route>
              <Route exact path="/saved-movies">
                  <Header
                      place="saved"
                      isMenuOpen={isMenuOpen}
                      onMenuOpen={openMenu}
                      onMenuClose={closeMenu}
                  />
                  <SavedMovies />
                  <Footer />
              </Route>
              <Route path="/">
                  <NotFound />
              </Route>
          </Switch>
          <InfoModal state={infoModalState} onClose={closeInfoModal} />
      </>
  );
}

export default App;
