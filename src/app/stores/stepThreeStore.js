class StepThreeStore {
  constructor(calculator) {
    this.calculator = calculator;
    this.NAME = 'StepThree';
    this.DESCRIPTION = 'Процесс расчета';
    this.previousStepAvailable = false;
    this.nextStepAvailable = false;
  }

  nextStep() {
    this.calculator.nextStep();
  }
}

export default StepThreeStore;
