import React from 'react';

import { Link } from 'react-router-dom';

const Welcome = () => (
  <div>
    Welcome

    <Link to="/login">Login</Link>
  </div>
);

export default Welcome;
