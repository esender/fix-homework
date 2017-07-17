import React, { Component } from 'react';

import Calculator from '_components/Calculator/Calculator';
import calculatorStore from '_stores/calculatorStore';

class CalculatorContainer extends Component {
  render() {
    return (
      <Calculator calculatorStore={calculatorStore} />
    );
  }
}

export default CalculatorContainer;
