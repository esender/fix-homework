import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from '_components/Welcome/Welcome';
import LoginContainer from '_containers/LoginContainer';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const AppContainer = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={LoginContainer} />
    </div>
  </Router>
);

ReactDOM.render(
  <AppContainer />,
  document.getElementById('app'),
);
