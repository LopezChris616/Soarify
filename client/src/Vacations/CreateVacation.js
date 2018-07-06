import React, {Component} from "react";
import {addVacation, getVacations} from "../redux/vacations"
import {connect} from "react-redux";
import Navbar from "../NavAndFoot/Navbar";
import Vacations from "./Vacations";
import Slide from 'react-reveal/Slide';

class CreateVacation extends Component {
    constructor(){
        super();

        this.state = {
            fullName: "",
            email: "",
            location: "",
            targetDate: "",
            costOfVacation: "",
            currentMoney: "",
            priority: "",
            purpose: ""
        }
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    newVacation = event => {
        event.preventDefault();

        this.props.addVacation({
            fullName: this.state.fullName,
            email: this.state.email,
            location: this.state.location,
            targetDate: this.state.targetDate,
            costOfVacation: this.state.costOfVacation,
            currentMoney: this.state.currentMoney,
            priority: this.state.priority,
            purpose: this.state.purpose
        })

        this.setState({
            fullName: "",
            email: "",
            location: "",
            targetDate: "",
            costOfVacation: "",
            currentMoney: "",
            priority: "",
            purpose: ""
        })
    }

    render(){
        return(
            <div>
                <div className="createVaca">
                <Navbar/>
                <Slide right>
                    <h1>Plan Your Next Vacation</h1>
                    <h2>Just fill out the form below!</h2>
                    <form id="createForm" onSubmit={this.newVacation}>
                        
                        <input type="text" name="location" placeholder="Location of Vacation" value={this.state.location} onChange={this.handleInputChange}/>
                        <input type="date" name="targetDate" placeholder="Target Date" value={this.state.targetDate} onChange={this.handleInputChange}/>
                        <input type="number" name="costOfVacation" placeholder="Cost of Vacation" value={this.state.costOfVacation} onChange={this.handleInputChange}/>
                        <input type="number" name="currentMoney" placeholder="Vacation Fund" value={this.state.currentMoney} onChange={this.handleInputChange}/>
                        <select name="priority" value={this.state.priority} onChange={this.handleInputChange}>
                            <option value="Priority">Priority</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <select name="purpose" value={this.state.purpose} onChange={this.handleInputChange}>
                            <option value="Purpose of Vacation">Purpose of Vacation</option>
                            <option value="Family Vacation">Family Vacation</option>
                            <option value="Business Trip">Business Trip</option>
                            <option value="Honeymoon">Honeymoon</option>
                            <option value="Holiday">Holiday</option>
                            <option value="Other">Other</option>
                        </select>
                        <button id="submitForm">Submit</button>
                    </form>
                    <Vacations/>
                    </Slide>
                </div>
                
            </div>
        )
    }
}

export default connect(state => ({vacations: state}), {addVacation, getVacations})(CreateVacation);