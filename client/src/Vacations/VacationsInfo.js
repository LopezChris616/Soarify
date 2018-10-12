import React from "react";
import { Button } from "reactstrap";

const VacationsInfo = props => {
    return(
        <tr>
            <th scope="row">{props.number + 1}</th>
            <td>{props.location}</td>
            <td>{props.date}</td>
            <td>Cost: ${props.cost}</td>
            <td>Current Funds: ${props.currentFunds}</td>
            <td>Priority: {props.priority}</td>
            <td>{props.purpose}</td>
            <td><Button onClick={props.popupEditToggle}>Edit</Button></td>
            <td><Button color="danger" onClick={props.popupDeleteToggle}>Delete</Button></td>
        </tr>
    )
}

export default VacationsInfo;