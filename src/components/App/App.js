import { Switch, Route } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';

function App() {
  return(
      <>
          {/* <Main /> */}
          <Movies />
          <Switch>
              <Route />
          </Switch>
      </>
  );
}

export default App;
