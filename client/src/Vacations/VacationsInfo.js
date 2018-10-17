import React from 'react';
import { Button } from 'reactstrap';

const VacationsInfo = (props) => {
  const { number, location, date, cost, currentFunds, priority, purpose, popupEditToggle, popupDeleteToggle } = props;
  return (
    <tr>
      <th scope="row">{number + 1}</th>
      <td>{location}</td>
      <td>{date}</td>
      <td>Cost: ${cost}</td>
      <td>Current Funds: ${currentFunds}</td>
      <td>Priority: {priority}</td>
      <td>{purpose}</td>
      <td><Button onClick={popupEditToggle}>Edit</Button></td>
      <td><Button color="danger" onClick={popupDeleteToggle}>Delete</Button></td>
    </tr>
  );
};

export default VacationsInfo;
