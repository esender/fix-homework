import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import Input from '_shared/Form/Input';
import { observer } from 'mobx-react';

import { Table, Button } from 'react-bootstrap';

import StepButtons from './StepButtons';

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
          <Input name="filter" value="" placeholder="Фильтр" />
        </Formsy.Form>
        <Button bsStyle="success" onClick={() => store.toggleOrder()}>Сменить сортировку</Button>
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
