import { observable, computed } from 'mobx';

import StepOneStore from './stepOneStore';
import StepTwoStore from './stepTwoStore';
import StepThreeStore from './stepThreeStore';
import StepFourStore from './stepFourStore';

class CalculatorStore {
  @observable currentStep;
  @observable values;

  constructor() {
    this.currentStep = 0;
    this.steps = [
      new StepOneStore(this),
      new StepTwoStore(this),
      new StepThreeStore(this),
      new StepFourStore(this),
    ];
    this.values = ['', ''];
  }

  @computed get step() {
    return this.steps[this.currentStep];
  }

  nextStep() {
    this.currentStep = this.currentStep + 1;
  }

  previousStep() {
    this.currentStep = this.currentStep - 1;
  }

  addValue() {
    this.values.push('');
  }

  updateValues(values) {
    this.values = values;
  }
}

export default new CalculatorStore();
