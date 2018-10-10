import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from 'reactstrap';

const CreateAPlan = props => {
    return(
        <Col xs="12" md="4">
            <Card style={{border: "none"}}>
                <CardImg top src={props.image} alt={props.alt} />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.body}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CreateAPlan;