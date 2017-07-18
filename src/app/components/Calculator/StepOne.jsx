import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import Input from '_shared/Form/Input';
import { observer } from 'mobx-react';

import StepButtons from './StepButtons';

@observer
class StepOne extends Component {
  handleChange = (model) => {
    const values = [];
    for (let i = 0; i < Object.keys(model).length; i++) { // convert object to array
      values[i] = model[i];
    }
    this.props.store.calculator.updateValues(values);
  }

  render() {
    const { store } = this.props;

    return (
      <div>
        <Formsy.Form onChange={this.handleChange}>
          {
            store.calculator.values.map((value, index) => (
              <Input
                type="number"
                name={`${index}`}
                value={value}
                placeholder="Положительное число"
                min="0"
              />
            ))
          }
        </Formsy.Form>
        <button onClick={() => store.addValue()}>+</button>
        <StepButtons store={store} />
      </div>
    );
  }
}

StepOne.propTypes = {
  store: PropTypes.shape({
    calculator: PropTypes.shape({
      updateValues: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default StepOne;
