class StepThreeStore {
  constructor(calculator) {
    this.calculator = calculator;
    this.NAME = 'StepThree';
    this.previousStepAvailable = false;
    this.nextStepAvailable = false;
  }

  nextStep() {
    this.calculator.nextStep();
  }
}

export default StepThreeStore;
