import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

import styles from './Calculator.css';

const STEPS = {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
};

@observer
class Calculator extends Component {
  render() {
    const { calculatorStore } = this.props;
    const stepStore = calculatorStore.step;
    const Step = STEPS[stepStore.NAME];

    return (
      <div>
        <div className="left">
          Calculator Left
        </div>
        <div className="right">
          <Step store={calculatorStore.step} />
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  calculatorStore: PropTypes.object.isRequired,
};

export default Calculator;
