import { computed } from 'mobx';

class StepThreeStore {
  constructor(calculator) {
    this.calculator = calculator;
    this.NAME = 'StepThree';
    this.previousStepAvailable = false;
    this.nextStepAvailable = true;
  }

  nextStep() {
    this.calculator.nextStep();
  }
}

export default StepThreeStore;
