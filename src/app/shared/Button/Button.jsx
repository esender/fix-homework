import React from 'react';
import classnames from 'classnames';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';

const Button = ({ isDefault, success, danger, onClick, ...props }) => (
  <button
    {...props}
    className={classnames(bootstrap.btn, {
      [bootstrap.default]: isDefault,
      [bootstrap.success]: success,
      [bootstrap.danger]: danger,
    })}
    onClick={(e) => !disabled && onClick && onClick(e) }
  />
);

export default Button;
