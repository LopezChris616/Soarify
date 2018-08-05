import React from "react";

const VacationsEdit = props => {
    return(
        <div>
            {props.isEditing ? 
                <form id="editForm" onSubmit={props.editVaca} className="popUpStyleEdit">
                    <div className="viewEditMessage">
                        <h2 className="editVacation">Edit Vacation</h2>
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
                        <button onClick={props.saveEdit} id="saveChanges">Save Changes</button>
                        <button onClick={props.editVaca} id="cancelChanges">Cancel</button>
                    </div>
                </form> : null}
        </div>
    )
}

export default VacationsEdit;