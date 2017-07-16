import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from '_pages/Welcome/Welcome';
import Login from '_pages/Login/Login';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const AppContainer = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

ReactDOM.render(
  <AppContainer />,
  document.getElementById('app'),
);
