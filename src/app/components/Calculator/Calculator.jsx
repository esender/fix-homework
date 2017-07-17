import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import StepOne from './StepOne';
import StepTwo from './StepTwo';

const STEPS = {
  StepOne,
  StepTwo,
}
@observer
class Calculator extends Component {
  render() {
    const { calculatorStore } = this.props;
    const stepStore = calculatorStore.step;
    const Step = STEPS[stepStore.NAME];
    console.log('render');
    return (
      <div>
        <div>
          Calculator Left
        </div>
        <div>
          <Step store={calculatorStore.step} />
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {};

export default Calculator;
