import React, { Component } from "react";
import { connect } from "react-redux";
import { getVacations, removeVacation } from "../redux/vacations";
import ViewVacations from "./ViewVacations";
import { Table, Container } from 'reactstrap';

class Vacations extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.getVacations();
    }

    render(){
        const showVaca = this.props.vacations.vacations.map((vacation, i) => {
            return (
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
            )
        })

        if(this.props.vacations.vacations.length < 1){
           return <h1 id="no-vacations">Please add a vacation with the form above...</h1>
        }

        return(
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
        )
    }
}

export default connect(state => ({vacations: state}), {getVacations, removeVacation})(Vacations);