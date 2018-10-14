import React from "react";
import Vacations from "./Vacations";
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const CreateVacationForm = props => {
    return(
        <div id="create-vacation">
            <Container id="create-vacation-form">
                <h1>Create A Vacation Plan</h1>
                <Form onSubmit={props.addVaca}>
                    <Row form>
                        <Col xs="12" md="4">
                            <FormGroup>
                                <Label for="location">Location</Label>
                                <Input type="text" name="location" id="location" value={props.location} onChange={props.inputChange} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" md="4">
                            <FormGroup>
                                <Label for="date">Date</Label>
                                <Input type="date" name="targetDate" id="date" value={props.date} onChange={props.inputChange} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" md="4">
                            <FormGroup>
                                <Label for="vaca-cost">Cost of Vacation</Label>
                                <Input type="number" name="costOfVacation" id="vaca-cost" value={props.cost} onChange={props.inputChange} required/>
                            </FormGroup>
                        </Col>     
                    </Row>
                    <Row form>
                        <Col xs="12" md="4">
                            <FormGroup>
                                <Label for="current-funds">Vacation Funds</Label>
                                <Input type="number" name="currentMoney" id="current-funds" value={props.currentMoney} onChange={props.inputChange} required/>
                            </FormGroup>
                        </Col>
                        <Col xs="12" md="4">
                            <FormGroup>
                                <Label for="priority">Priority</Label>
                                <Input type="select" name="priority" id="priority" value={props.priority} onChange={props.inputChange} required>
                                    <option value="Priority">Priority</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs="12" md="4">
                            <FormGroup>
                                <Label for="purpose">Purpose</Label>
                                <Input type="select" name="purpose" id="purpose" value={props.purpose} onChange={props.inputChange} required>
                                    <option value="Purpose of Vacation">Purpose of Vacation</option>
                                    <option value="Family Vacation">Family Vacation</option>
                                    <option value="Business Trip">Business Trip</option>
                                    <option value="Honeymoon">Honeymoon</option>
                                    <option value="Holiday">Holiday</option>
                                    <option value="Other">Other</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button color="primary" size="lg">Add</Button>
                </Form>
            </Container>
            <Vacations />
        </div>
    )
}

export default CreateVacationForm;