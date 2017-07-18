/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import Input from '_shared/Form/Input';
import { observer } from 'mobx-react';

import { Table, Button, ButtonGroup } from 'react-bootstrap';

import StepButtons from './StepButtons';

@observer
class StepTwo extends Component {
  constructor(props) {
    super(props);

    document.title = 'Подтверждение данных';
  }

  handleChange = ({ filter }) => {
    this.props.store.setFilter(filter);
  }

  render() {
    const { store } = this.props;

    return (
      <div>
        <Formsy.Form onChange={this.handleChange}>
          <Input name="filter" value="" placeholder="Фильтр" />
        </Formsy.Form>
        <ButtonGroup>
          <Button bsStyle="success" onClick={() => store.orderBy('asc')}>По возрастанию</Button>
          <Button bsStyle="success" onClick={() => store.orderBy('desc')}>По убыванию</Button>
        </ButtonGroup>
        <Table>
          <thead>
            <tr>
              <th>Введенные данные</th>
            </tr>
          </thead>
          <tbody>
            {store.filteredValues.map((value, index) => (
              <tr key={value + index}>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <StepButtons store={store} />
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
