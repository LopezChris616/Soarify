import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

const VacationsEdit = props => {
    return(
        <div>
            <Modal isOpen={props.isEditing} toggle={props.popupEditToggle}>
                <ModalHeader toggle={props.popupEditToggle}> Edit Vacation Plan</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row form>
                            <Col xs="12" md="4">
                                <FormGroup>
                                    <Label for="editlocation">Location</Label>
                                    <Input type="text" name="location" id="editLocation" onChange={props.inputChange} value={props.location} required/>
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4">
                                <FormGroup>
                                    <Label for="editDate">Date</Label>
                                    <Input type="date" name="targetDate" id="editDate" onChange={props.inputChange} value={props.date} required/>
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4">
                                <FormGroup>
                                    <Label for="editCost">Vacation Cost</Label>
                                    <Input type="number" name="costOfVacation" id="editCost" onChange={props.inputChange} value={props.cost} required/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col xs="12" md="4">
                                <FormGroup>
                                    <Label for="editFunds">Vacation Fund</Label>
                                    <Input type="number" name="currentMoney" id="editFunds" onChange={props.inputChange} value={props.currentMoney} required/>
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4">
                                <FormGroup>
                                    <Label for="editPriority">Priority</Label>
                                    <Input type="select" name="priority" id="editPriority" onChange={props.inputChange} value={props.priority} required>
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
                                    <Label for="editPurpose">Purpose</Label>
                                    <Input type="select" name="purpose" id="editPurpose" onChange={props.inputChange} value={props.purpose} required>
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
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={props.saveEdit}>Save Changes</Button>
                    <Button color="secondary" onClick={props.popupEditToggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default VacationsEdit;