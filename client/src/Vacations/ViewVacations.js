import React, { Component } from "react";
import { connect } from "react-redux";
import { removeVacation, editVacation } from "../redux/vacations";
import VacationsInfo from "./VacationsInfo";
import VacationsEdit from "./VacationsEdit";
import VacationsDelete from "./VacationsDelete";

class ViewVacations extends Component {
    constructor(){
        super();

        this.state = {
            isPoppingUpDelete: false,
            isPoppingUpEdit: false,
            location: "",
            targetDate: "",
            costOfVacation: "",
            currentMoney: "",
            priority: "",
            purpose: ""
        }
    }

    deleteVacation = () => {
        this.props.removeVacation(this.props.id);
    }

    popUpDelete = () => {
        this.setState(prevState => {
            return {
                isPoppingUpDelete: !prevState.isPoppingUpDelete
            }
        })
    }

    editAVacation = () => {
        this.props.editVacation(this.props.id, {
            location: this.state.location,
            targetDate: this.state.targetDate,
            costOfVacation: this.state.costOfVacation,
            currentMoney: this.state.currentMoney,
            priority: this.state.priority,
            purpose: this.state.purpose
        })
    }

    popUpEdit = () => {
        this.setState(prevState => {
            return {
                location: this.props.location,
                targetDate: this.props.date,
                costOfVacation: this.props.cost,
                currentMoney: this.props.currentFunds,
                priority: this.props.priority,
                purpose: this.props.purpose,
                isPoppingUpEdit: !prevState.isPoppingUpEdit
            }
        })
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const date = this.props.date;
        const newDate = date.replace("T00:00:00.000Z", "");
        
        return(
            <div>
                <VacationsInfo 
                date={newDate}
                location={this.props.location}
                priority={this.props.priority}
                cost={this.props.cost.toLocaleString("en-us")}
                currentFunds={this.props.currentFunds.toLocaleString("en-us")}
                purpose={this.props.purpose}
                popupDeleteToggle={this.popUpDelete}
                popupEditToggle={this.popUpEdit}
                number={this.props.number}
                />

                <VacationsDelete 
                isDeleting={this.state.isPoppingUpDelete}
                deleteVaca={this.deleteVacation}
                popupDeleteToggle={this.popUpDelete}
                />

                <VacationsEdit 
                isEditing={this.state.isPoppingUpEdit}
                popupEditToggle={this.popUpEdit}
                saveEdit={this.editAVacation}
                location={this.state.location}
                inputChange={this.handleInputChange}
                date={this.state.targetDate}
                cost={this.state.costOfVacation}
                currentMoney={this.state.currentMoney}
                priority={this.state.priority}
                purpose={this.state.purpose}
                />
            </div>
        )
    }
}

export default connect(state => ({vacations: state}), {removeVacation, editVacation})(ViewVacations);