import React, { Component } from 'react';
import Formsy from 'formsy-react';
import Input from '_shared/Form/Input';
import { observer } from 'mobx-react';

@observer
class StepOne extends Component {
  handleSubmit(model) {
    console.log(model);
  }

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
        <Formsy.Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          {
            store.calculator.values.map((value, index) =>(
              <Input name={`${index}`} value={value} />
            ))
          }
        </Formsy.Form>
        <button onClick={() => store.addValue()}>+</button>
        <button disabled={!store.previousStepAvailable}>Previous</button>
        <button onClick={() => store.nextStep()} disabled={!store.nextStepAvailable}>Next</button>
      </div>
    );
  }
}

export default StepOne;
