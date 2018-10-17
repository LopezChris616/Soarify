import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Container } from 'reactstrap';
import { getVacations, removeVacation } from '../redux/vacations';
import ViewVacations from './ViewVacations';

class Vacations extends Component {
  componentDidMount() {
    const { getVacationsConnect } = this.props;
    getVacationsConnect();
  }

  render() {
    const { vacations } = this.props;
    const showVaca = vacations.vacations.map((vacation, i) => (
      <ViewVacations
        key={vacation._id}
        id={vacation._id}
        name={vacation.fullName}
        email={vacation.email}
        location={vacation.location}
        date={vacation.targetDate}
        cost={vacation.costOfVacation}
        currentFunds={vacation.currentMoney}
        priority={vacation.priority}
        purpose={vacation.purpose}
        number={i}
      />
    ));

    if (vacations.vacations.length < 1) {
      return <h1 id="no-vacations">Please add a vacation with the form above...</h1>;
    }

    return (
      <div>
        <Container>
          <Table responsive hover dark id="vacation-table">
            <thead>
              <tr>
                <th>Your Vacation Plans</th>
              </tr>
            </thead>
            <tbody>
              {showVaca}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default connect(
  state => ({ vacations: state }), { getVacationsConnect: getVacations, removeVacation },
)(Vacations);
