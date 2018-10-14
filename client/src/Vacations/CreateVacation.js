import React, { Component } from "react";
import { addVacation, getVacations } from "../redux/vacations"
import { connect } from "react-redux";
import Navbar from "../NavAndFoot/Navbar";
import CreateVacationsForm from "./CreateVacationsForm";

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

    componentDidMount(){
        document.title = "Your Vacation Plans";
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
            <div id="create-vacation-container">
                <Navbar/>
                <CreateVacationsForm 
                location={this.state.location}
                inputChange={this.handleInputChange}
                date={this.state.targetDate}
                cost={this.state.costOfVacation}
                currentMoney={this.state.currentMoney}
                priority={this.state.priority}
                purpose={this.state.purpose}
                addVaca={this.newVacation}
                />
            </div>
        )
    }
}

export default connect(state => ({vacations: state}), {addVacation, getVacations})(CreateVacation);