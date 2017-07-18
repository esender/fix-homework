import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';
import { Well } from 'react-bootstrap';

import StepButtons from './StepButtons';

@observer
class StepThree extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => this.props.store.nextStep(), 5000);
    document.title = 'Расчет';
  }

  render() {
    const { store } = this.props;

    return (
      <div>
        <Well>
          Пожалуйста подождите. Процесс расчета...
        </Well>
        <StepButtons store={store} />
      </div>
    );
  }
}

StepThree.propTypes = {
  store: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
  }).isRequired,
};

export default StepThree;
