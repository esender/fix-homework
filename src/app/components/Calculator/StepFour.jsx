import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';
import StepButtons from './StepButtons';

@observer
class StepFour extends Component {
  render() {
    const { store } = this.props;

    return (
      <div>
        {store.result}
        <StepButtons store={store} />
      </div>
    );
  }
}

StepFour.propTypes = {
  store: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
  }).isRequired,
};

export default StepFour;
