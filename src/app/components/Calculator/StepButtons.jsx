import React from 'react';
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

export default StepButtons;
