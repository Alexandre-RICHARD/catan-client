import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './style.scss';
import Loading from 'src/components/Loading';
import Home from 'src/containers/Home';
import Starting from 'src/containers/Starting';
import { io } from 'socket.io-client';
import socketIo from 'src/middlewares/socketIo';

const socket = io.connect('http://localhost:3000');
socketIo(socket);

const App = (({
  haveNickname,
  isLoading,
}) => {
  console.log('Juste là pour garder la forme');
  return (
    <Router>
      <div className="App">
        {isLoading && (<Loading />)}
        <Switch>
          <Route path="/" exact>
            {haveNickname ? <Redirect to="/home" /> : <Redirect to="/starting" />}
          </Route>
          <Route path="/home" exact>
            {haveNickname ? <Home /> : <Redirect to="/starting" />}
          </Route>
          <Route path="/starting" exact>
            {haveNickname ? <Redirect to="/home" /> : <Starting />}
          </Route>
        </Switch>
        <p className="siteReference">Aucun copyright, projet personnel non distribué ou commercialisé. Version 0.1</p>
      </div>
    </Router>
  );
});

App.propTypes = {
  haveNickname: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default App;
