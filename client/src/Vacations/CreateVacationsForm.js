import React from "react";
import Vacations from "./Vacations";
import Slide from 'react-reveal/Slide';

const CreateVacationForm = props => {
    return(
        <div className="createVaca">
            <Slide right>
                <h1 id="planVaca">Plan Your Next Vacation</h1>
                <h2>Just fill out the form below!</h2>
                <form id="createForm" onSubmit={props.addVaca}> 
                    <input type="text" name="location" placeholder="Location of Vacation" value={props.location} onChange={props.inputChange}/>
                    <input type="date" name="targetDate" placeholder="Target Date" value={props.date} onChange={props.inputChange}/>
                    <input type="number" name="costOfVacation" placeholder="Cost of Vacation" value={props.cost} onChange={props.inputChange}/>
                    <input type="number" name="currentMoney" placeholder="Vacation Fund" value={props.currentMoney} onChange={props.inputChange}/>
                    <select name="priority" value={props.priority} onChange={props.inputChange}>
                        <option value="Priority">Priority</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <select name="purpose" value={props.purpose} onChange={props.inputChange}>
                        <option value="Purpose of Vacation">Purpose of Vacation</option>
                        <option value="Family Vacation">Family Vacation</option>
                        <option value="Business Trip">Business Trip</option>
                        <option value="Honeymoon">Honeymoon</option>
                        <option value="Holiday">Holiday</option>
                        <option value="Other">Other</option>
                    </select>
                    <button id="submitForm">Submit</button>
                </form>
            </Slide>
            <Vacations />
        </div>
    )
}

export default CreateVacationForm;