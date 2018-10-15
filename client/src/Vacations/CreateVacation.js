import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVacation, getVacations } from '../redux/vacations';
import Navbar from '../NavAndFoot/Navbar';
import CreateVacationsForm from './CreateVacationsForm';

class CreateVacation extends Component {
  constructor(props) {
    super(props);

    this.state = { fullName: '',
      email: '',
      location: '',
      targetDate: '',
      costOfVacation: '',
      currentMoney: '',
      priority: '',
      purpose: '' };
  }

  componentDidMount() {
    document.title = 'Your Vacation Plans';
  }

    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }

    newVacation = (event) => {
      event.preventDefault();

      const { fullName, email, location, targetDate, costOfVacation, currentMoney, priority, purpose } = this.state;

      this.props.addVacation({ fullName,
        email,
        location,
        targetDate,
        costOfVacation,
        currentMoney,
        priority,
        purpose });

      this.setState({ fullName: '',
        email: '',
        location: '',
        targetDate: '',
        costOfVacation: '',
        currentMoney: '',
        priority: '',
        purpose: '' });
    }

    render() {
      const { location, targetDate, costOfVacation, currentMoney, priority, purpose } = this.state;
      return (
        <div id="create-vacation-container">
          <Navbar />
          <CreateVacationsForm
            location={location}
            inputChange={this.handleInputChange}
            date={targetDate}
            cost={costOfVacation}
            currentMoney={currentMoney}
            priority={priority}
            purpose={purpose}
            addVaca={this.newVacation}
          />
        </div>
      );
    }
}

export default connect(
  state => ({ vacations: state }), { addVacation, getVacations },
)(CreateVacation);
