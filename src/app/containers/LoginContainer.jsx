import React, { Component } from 'react';

import Login from '_components/Login/Login';
import authenticateStore from '_stores/authenticateStore';

const initialState = localStorage.getItem('authentication');

class LoginContainer extends Component {
  render() {
    return (
      <Login store={authenticateStore.fromJS(initialState || {})} />
    );
  }
}

export default LoginContainer;
