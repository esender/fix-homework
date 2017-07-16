import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from '_pages/Welcome/Welcome';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const AppContainer = () => (
  <Router>
    <Route exact path="/" component={Welcome} />
  </Router>
);

ReactDOM.render(
  <AppContainer />,
  document.getElementById('app'),
);
