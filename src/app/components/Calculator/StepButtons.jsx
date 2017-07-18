import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';

const StepButtons = ({ store, lastStep }) => (
  <div>
    <ButtonGroup>
      <Button
        bsStyle={store.previousStepAvailable ? 'success' : 'default'}
        disabled={!store.previousStepAvailable}
        onClick={() => store.previousStep()}
      >
        {lastStep ? 'Вернуться к вводу данных' : 'Назад'}
      </Button>
      {
        !lastStep &&
          <Button
            bsStyle={store.nextStepAvailable ? 'success' : 'default'}
            disabled={!store.nextStepAvailable}
            onClick={() => store.nextStep()}
          >
            Продолжить
          </Button>
      }
    </ButtonGroup>
  </div>
);

StepButtons.propTypes = {
  store: PropTypes.shape({
    previousStepAvailable: PropTypes.bool.isRequired,
    nextStepAvailable: PropTypes.bool.isRequired,
    previousStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
  }).isRequired,
  lastStep: PropTypes.bool,
};

StepButtons.defaultProps = {
  lastStep: false,
};

export default StepButtons;
