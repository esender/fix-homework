import React, { Component } from 'react';

import Calculator from '_components/Calculator/Calculator';
import calculatorStore from '_stores/calculatorStore';
import authenticateStore from '_stores/authenticateStore';

class CalculatorContainer extends Component {
  render() {
    return (
      <Calculator calculatorStore={calculatorStore} authStore={authenticateStore} />
    );
  }
}

export default CalculatorContainer;
