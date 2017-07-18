/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';
import { Table } from 'react-bootstrap';

import StepButtons from './StepButtons';

const HighlightNumber = ({ num }) => (
  <span style={{ color: +num > 10 ? '#72c172' : 'black' }}>{num}</span>
);

HighlightNumber.propTypes = {
  num: PropTypes.string.isRequired,
};

@observer
class StepFour extends Component {
  constructor(props) {
    super(props);

    document.title = 'Результат';
  }

  render() {
    const { store } = this.props;

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Порядковый номер</th>
              <th>Введенные данные</th>
            </tr>
          </thead>
          <tbody>
            {store.calculator.values.map((value, index) => (
              <tr key={value + index}>
                <td>{index}</td>
                <td><HighlightNumber num={value} /></td>
              </tr>
            ))}
            <tr>
              <td>Результат</td>
              <td>{store.result}</td>
            </tr>
          </tbody>
        </Table>
        <StepButtons store={store} lastStep />
      </div>
    );
  }
}

StepFour.propTypes = {
  store: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
  }).isRequired,
};

export default StepFour;
