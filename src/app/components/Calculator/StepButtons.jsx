import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const StepButtons = ({ store }) => (
  <div>
    <Button
      bsStyle={store.previousStepAvailable ? 'success' : 'default'}
      disabled={!store.previousStepAvailable}
      onClick={() => store.previousStep()}
    >
      Предыдущий шаг
    </Button>
    <Button
      bsStyle={store.nextStepAvailable ? 'success' : 'default'}
      disabled={!store.nextStepAvailable}
      onClick={() => store.nextStep()}
    >
      Следующий шаг
    </Button>
  </div>
);

StepButtons.propTypes = {
  store: PropTypes.shape({
    previousStepAvailable: PropTypes.bool.isRequired,
    nextStepAvailable: PropTypes.bool.isRequired,
    previousStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
  }).isRequired,
};

export default StepButtons;
