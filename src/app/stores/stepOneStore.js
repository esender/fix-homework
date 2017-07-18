import { computed } from 'mobx';

class StepOneStore {
  constructor(calculator) {
    this.calculator = calculator;
    this.NAME = 'StepOne';
    this.previousStepAvailable = false;
  }

  @computed get nextStepAvailable() {
    return this.calculator.values.every(value => value.length);
  }

  nextStep() {
    this.calculator.nextStep();
  }

  addValue() {
    this.calculator.addValue();
  }
}

export default StepOneStore;
