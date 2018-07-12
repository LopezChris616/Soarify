import React, {Component} from "react";
import {connect} from "react-redux";
import {removeVacation, editVacation} from "../redux/vacations";

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
            <div id="vacationsInfo">
                <h2 id="location">Location: {this.props.location}</h2>
                <p>Date: {newDate}</p>
                <p>Priority: {this.props.priority}</p>
                <p>Vacation Cost: ${this.props.cost.toLocaleString("en-us")}</p>
                <p> Current Vacation Funds: ${this.props.currentFunds.toLocaleString("en-us")}</p>
                <p>Purpose: {this.props.purpose}</p>
                {this.props.cost - this.props.currentFunds < 1 ? <p>Ready to go!</p> : <p>You need more money...</p>}
                <button onClick={this.popUpDelete}>Remove</button>
                <button onClick={this.popUpEdit}>Edit</button>


                {this.state.isPoppingUpDelete ? <div className="popUpStyle">
                    <div className="viewDeleteMessage">
                        <h2>Are you sure you want to remove this vacation?</h2>
                        <h3>There is no going back...</h3>
                        <button onClick={this.deleteVacation}>Yes, I am sure.</button>
                        <button onClick={this.popUpDelete}>Nevermind!</button>
                    </div>
                </div>
                :null}


                {this.state.isPoppingUpEdit ? 
                        <form id="editForm" onSubmit={this.popUpEdit} className="popUpStyleEdit">
                        <div className="viewEditMessage">
                        <h2 className="editVacation">Edit Vacation</h2>
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
                        <button onClick={this.editAVacation} id="saveChanges">Save Changes</button>
                        <button onClick={this.popUpEdit} id="cancelChanges">Cancel</button>
                        </div>
                    </form> : null}
            </div>
        )
    }
}

export default connect(state => ({vacations: state}), {removeVacation, editVacation})(ViewVacations);