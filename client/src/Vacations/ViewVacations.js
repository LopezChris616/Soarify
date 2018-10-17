import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeVacation, editVacation } from '../redux/vacations';
import VacationsInfo from './VacationsInfo';
import VacationsEdit from './VacationsEdit';
import VacationsDelete from './VacationsDelete';

class ViewVacations extends Component {
  constructor() {
    super();

    this.state = { isPoppingUpDelete: false,
      isPoppingUpEdit: false,
      location2: '',
      targetDate: '',
      costOfVacation: '',
      currentMoney: '',
      priority2: '',
      purpose2: '' };
  }

    deleteVacation = () => {
      const { removeVacationConnect, id } = this.props;
      removeVacationConnect(id);
    }

    popUpDelete = () => {
      this.setState(prevState => ({ isPoppingUpDelete: !prevState.isPoppingUpDelete }));
    }

    editAVacation = () => {
      const { editVacationConnect, id } = this.props;
      const { location, targetDate, costOfVacation, currentMoney, priority, purpose } = this.state;
      editVacationConnect(id, { location,
        targetDate,
        costOfVacation,
        currentMoney,
        priority,
        purpose });
      this.popUpEdit();
    }

    popUpEdit = () => {
      const { location, date, cost, currentFunds, priority, purpose } = this.props;
      this.setState(prevState => ({ location2: location,
        targetDate: date,
        costOfVacation: cost,
        currentMoney: currentFunds,
        priority2: priority,
        purpose2: purpose,
        isPoppingUpEdit: !prevState.isPoppingUpEdit }));
    }

    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }

    render() {
      const { date, location, priority, cost, currentFunds, purpose, number } = this.props;
      const { isPoppingUpDelete, isPoppingUpEdit, location2, targetDate, costOfVacation, currentMoney, priority2, purpose2 } = this.state;
      const newDate = date.replace('T00:00:00.000Z', '');

      return (
        <div>
          <VacationsInfo
            date={newDate}
            location={location}
            priority={priority}
            cost={cost.toLocaleString('en-us')}
            currentFunds={currentFunds.toLocaleString('en-us')}
            purpose={purpose}
            popupDeleteToggle={this.popUpDelete}
            popupEditToggle={this.popUpEdit}
            number={number}
          />

          <VacationsDelete
            isDeleting={isPoppingUpDelete}
            deleteVaca={this.deleteVacation}
            popupDeleteToggle={this.popUpDelete}
          />

          <VacationsEdit
            isEditing={isPoppingUpEdit}
            popupEditToggle={this.popUpEdit}
            saveEdit={this.editAVacation}
            location={location2}
            inputChange={this.handleInputChange}
            date={targetDate}
            cost={costOfVacation}
            currentMoney={currentMoney}
            priority={priority2}
            purpose={purpose2}
          />
        </div>
      );
    }
}

export default connect(state => ({ vacations: state }), { removeVacationConnect: removeVacation, editVacationConnect: editVacation })(ViewVacations);
