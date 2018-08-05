import React from "react";

const VacationsDelete = props => {
    return(
        <div>
            {props.deleteConfirm ? 
            <div className="popUpStyle">
                <div className="viewDeleteMessage">
                    <h2>Are you sure you want to remove this vacation?</h2>
                    <h3>There is no going back...</h3>
                    <button onClick={props.deleteVaca}>Yes, I am sure.</button>
                    <button onClick={props.noDelete}>Nevermind!</button>
                </div>
            </div> : null}
        </div>
    )
}

export default VacationsDelete;