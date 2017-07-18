import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Input extends Component {
  render() {
    const { getValue, setValue, placeholder, type, min } = this.props;

    return (
      <FormGroup>
        {placeholder && <ControlLabel>{placeholder}</ControlLabel>}
        <FormControl
          type={type}
          value={getValue()}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder}
          min={min}
        />
      </FormGroup>
    );
  }
}

Input.propTypes = {
  getValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  min: null,
};

export default HOC(Input);
