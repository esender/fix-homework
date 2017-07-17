import { observable, computed } from 'mobx';

import stepOneStore from './stepOneStore';
import stepTwoStore from './stepTwoStore';

class CalculatorStore {
  @observable currentStep;
  @observable values;

  constructor() {
    this.currentStep = 0;
    this.steps = [
      new stepOneStore(this),
      new stepTwoStore(this),
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
