/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import Input from '_shared/Form/Input';
import { observer } from 'mobx-react';
import { Button } from 'react-bootstrap';

import StepButtons from './StepButtons';

import './StepOne.css';

@observer
class StepOne extends Component {
  constructor(props) {
    super(props);

    document.title = 'Ввод данных';
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
        <Formsy.Form onChange={this.handleChange}>
          {
            store.calculator.values.map((value, index) => (
              <Input
                type="number"
                name={`${index}`}
                value={value}
                key={index}
                placeholder="Положительное число"
                min="0"
              />
            ))
          }
        </Formsy.Form>
        <Button
          bsStyle="success"
          onClick={() => store.addValue()}
          className="add_new_field"
        >
          Добавить поле
        </Button>
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
