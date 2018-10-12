import React from "react";
import { Button } from "reactstrap";

const VacationsInfo = props => {
    return(
        <tr>
            <th scope="row">{props.number + 1}</th>
            <td>{props.location}</td>
            <td>{props.date}</td>
            <td>${props.cost}</td>
            <td>${props.currentFunds}</td>
            <td>{props.priority}</td>
            <td>{props.purpose}</td>
            <td><Button onClick={props.popupEditToggle}>Edit</Button></td>
            <td><Button onClick={props.popupDeleteToggle}>Delete</Button></td>
        </tr>
    )
}

export default VacationsInfo;