import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import Input from '_shared/Form/Input';
import { observer } from 'mobx-react';

@observer
class StepTwo extends Component {
  handleChange = ({ filter }) => {
    this.props.store.setFilter(filter);
  }

  render() {
    const { store } = this.props;

    return (
      <div>
        <Formsy.Form onChange={this.handleChange}>
          <Input name="filter" value="" />
        </Formsy.Form>
        <button onClick={() => store.toggleOrder()}>Toggle</button>
        {store.filteredValues.map(value => <span>{value}</span>)}
        <button onClick={() => store.previousStep()} disabled={!store.previousStepAvailable}>
          Previous
        </button>
        <button onClick={() => store.nextStep()} disabled={!store.nextStepAvailable}>Next</button>
      </div>
    );
  }
}

StepTwo.propTypes = {
  store: PropTypes.shape({
    setFilter: PropTypes.func.isRequired,
  }).isRequired,
};

export default StepTwo;
