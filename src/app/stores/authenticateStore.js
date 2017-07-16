import { observable } from 'mobx';

const initialState = localStorage.getItem('authentication');
const DEFAULT_USER = { login: null, isAuthenticated: false };

class AuthenticateStore {
  @observable login;
  @observable isAuthenticated;
  @observable error;

  constructor(user = DEFAULT_USER) {
    this.login = user.login;
    this.isAuthenticated = user.isAuthenticated || false;
    this.error = false;
  }

  signIn({ login, password }) {
    if (login === 'a@a.com' && password === 'b') {
      this.authenticate(login);
    } else {
      this.unauthenticate();
    }
  }

  authenticate(login) {
    this.login = login;
    this.isAuthenticated = true;
    this.error = false;
  }

  unauthenticate() {
    this.login = null;
    this.isAuthenticated = false;
    this.error = 'Не удалось авторизироваться. Некорректная пара логин/пароль.';
  }

  toJS() {
    return {
      login: this.login,
      isAuthenticated: this.isAuthenticated,
    };
  }

  static fromJS(user) {
    return new AuthenticateStore(user);
  }
}

export default AuthenticateStore.fromJS(initialState || {});
