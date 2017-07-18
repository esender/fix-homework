import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

import PrivateRoute from '_shared/PrivateRoute/PrivateRoute';

import WelcomeContainer from '_containers/WelcomeContainer';
import LoginContainer from '_containers/LoginContainer';
import CalculatorContainer from '_containers/CalculatorContainer';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const AppContainer = () => (
  <Router>
    <div>
      <Route exact path="/" component={WelcomeContainer} />
      <Route path="/login" component={LoginContainer} />
      <PrivateRoute path="/calculator" component={CalculatorContainer} />
    </div>
  </Router>
);

ReactDOM.render(
  <AppContainer />,
  document.getElementById('app'),
);
