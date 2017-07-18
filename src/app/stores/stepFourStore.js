import { computed } from 'mobx';

class StepFourStore {
  constructor(calculator) {
    this.calculator = calculator;
    this.NAME = 'StepFour';
    this.previousStepAvailable = true;
    this.nextStepAvailable = false;
  }

  previousStep() {
    this.calculator.previousStep();
  }

  @computed get result() {
    return this.calculator.values.reduce((sum, value) => (sum + parseInt(value)), 0);
  }
}

export default StepFourStore;
