import { computed } from 'mobx';

class StepFourStore {
  constructor(calculator) {
    this.calculator = calculator;
    this.NAME = 'StepFour';
    this.DESCRIPTION = 'Результаты вычислений';
    this.previousStepAvailable = true;
    this.nextStepAvailable = false;
  }

  previousStep() {
    this.calculator.clearValues();
    this.calculator.previousStep(-3);
  }

  @computed get result() {
    return this.calculator.values.reduce((sum, value) => (sum + parseInt(value, 10)), 0);
  }
}

export default StepFourStore;
