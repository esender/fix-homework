import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';

@observer
class StepFour extends Component {
  render() {
    const { store } = this.props;

    return (
      <div>
        {store.result}
        <button disabled={!store.previousStepAvailable}>
          Previous
        </button>
        <button disabled={!store.nextStepAvailable}>Next</button>
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
