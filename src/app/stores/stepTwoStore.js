import { observable, computed } from 'mobx';

class StepTwoStore {
  @observable filter;
  @observable order;

  constructor(calculator) {
    this.calculator = calculator;
    this.NAME = 'StepTwo';
    this.previousStepAvailable = true;
    this.nextStepAvailable = true;
    this.filter = '';
    this.order = null;
  }

  nextStep() {
    this.calculator.nextStep();
  }

  previousStep() {
    this.calculator.previousStep();
  }

  toggleOrder() {
    this.order = this.order === 'asc' ? 'desc' : 'asc';
  }

  @computed get filteredValues() {
    if (!this.order) {
      return this.filterVal();
    }

    if (this.order === 'asc') {
      return this.filterVal().sort((a, b) => a - b);
    }

    return this.filterVal().sort((a, b) => b - a);
  }

  setFilter(filter) {
    this.filter = filter;
  }

  filterVal() {
    if (this.filter.length) {
      return this.calculator.values.filter(value => value.includes(this.filter));
    }

    return this.calculator.values;
  }
}

export default StepTwoStore;
