import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import authenticateStore from '_stores/authenticateStore';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    authenticateStore.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
      }}/>
    )
  )}/>
)

export default PrivateRoute;
