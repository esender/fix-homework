import React, { Component } from 'react';

import Login from '_components/Login/Login';
import authenticateStore from '_stores/authenticateStore';

class LoginContainer extends Component {
  render() {
    return (
      <Login store={authenticateStore} />
    );
  }
}

export default LoginContainer;
