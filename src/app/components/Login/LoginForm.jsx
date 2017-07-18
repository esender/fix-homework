import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';

import Input from '_shared/Form/Input';

import { Button } from 'react-bootstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: false,
    };
  }

  handleValidForm = () => {
    this.setState({ valid: true });
  }

  handleInvalidForm = () => {
    this.setState({ valid: false });
  }

  render() {
    return (
      <Formsy.Form
        onValid={this.handleValidForm}
        onInvalid={this.handleInvalidForm}
        onValidSubmit={this.props.onSubmit}
      >
        <Input
          name="login"
          type="email"
          placeholder="Логин"
          value=""
          validations="isEmail"
          required
        />
        <Input
          name="password"
          type="password"
          value=""
          placeholder="Пароль"
          required
        />
        <Button
          type="submit"
          bsStyle={this.state.valid ? 'success' : 'default'}
          disabled={!this.state.valid}
        >
         Войти
        </Button>
      </Formsy.Form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
