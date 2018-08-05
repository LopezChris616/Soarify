import React from "react";

const VacationsInfo = props => {
    return(
        <div id="vacationsInfo">
            <h2 id="location">Location: {props.location}</h2>
            <p>Date: {props.date}</p>
            <p>Priority: {props.priority}</p>
            <p>Vacation Cost: ${props.cost}</p>
            <p> Current Vacation Funds: ${props.currentFunds}</p>
            <p>Purpose: {props.purpose}</p>
            {props.cost - props.currentFunds < 1 ? <p>Ready to go!</p> : <p>You need more money...</p>}
            <button onClick={props.popUpDelete}>Remove</button>
            <button onClick={props.popUpEdit}>Edit</button>
        </div>
    )
}

export default VacationsInfo;