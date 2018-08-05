import React, { Component } from "react";
import { connect } from "react-redux";
import { getVacations, removeVacation } from "../redux/vacations";
import ViewVacations from "./ViewVacations";

class Vacations extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.getVacations();
    }

    render(){
        const showVaca = this.props.vacations.vacations.map(vacation => {
            return <ViewVacations 
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
                />
        })

        if(this.props.vacations.vacations.length < 1){
           return <h1 id="noVacations">Please add a vacation with the form above...</h1>
        }

        return(
                <div id="vacationsGrid">
                    <h1 id="vacaPlans">Your Vacation Plans</h1>
                    <div id="viewVaca">
                        {showVaca}
                    </div>
                    
                </div>  
        )
    }
}

export default connect(state => ({vacations: state}), {getVacations, removeVacation})(Vacations);