import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';

class Input extends Component {
  render() {
    const { getValue, setValue } = this.props;

    return (
      <input
        value={getValue()}
        onChange={e => setValue(e.target.value)}
      />
    );
  }
}

Input.propTypes = {
  getValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default HOC(Input);
