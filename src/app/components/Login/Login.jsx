import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';

import LoginForm from './LoginForm';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

@observer
class Login extends Component {
  handleSubmit = (form) => {
    this.props.store.signIn(form);
  }

  render() {
    const { store } = this.props;

    if (store.isAuthenticated) {
      return (
        <Redirect push to="/calculator" />
      );
    }

    return (
      <Grid>
        <Row>
          <Col
            md={6}
            mdOffset={3}
          >
            <h1>Пожалуйста авторизируйтесь</h1>
            <LoginForm error={store.error} onSubmit={this.handleSubmit} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

Login.propTypes = {
  store: PropTypes.shape({
    signIn: PropTypes.func.isRequired,
    error: PropTypes.string,
    isAuthenticated: PropTypes.bool,
  }).isRequired,
};

export default Login;
