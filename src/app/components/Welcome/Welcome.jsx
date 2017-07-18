import React from 'react';

import { Link } from 'react-router-dom';
import { Grid, Jumbotron } from 'react-bootstrap';

const Welcome = () => (
  <Grid>
    <Jumbotron>
      <h1>Добро пожаловать, в пошаговый калькулятор!</h1>

      <Link to="/login">Авторизируйтесь</Link>
    </Jumbotron>
  </Grid>
);

export default Welcome;
