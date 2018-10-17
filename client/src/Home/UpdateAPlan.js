import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Container, Row, Col } from 'reactstrap';

const UpdateAPlan = () => (
  <Container style={{ color: 'white' }}>
    <Row xs="12" md="6">
      <Col>
        <FontAwesome name="edit" size="10x" style={{ color: 'white' }} />
      </Col>
      <Col>
        <h2 style={{ textDecoration: 'underline', textUnderlinePosition: 'under', margin: '10px 0px' }}>Update/Change Your Plan</h2>
        <p>Need to change your target date? Or are you maybe making a last-minute location change? You have the ability to update whatever area of your plan that you deem neccessary.</p>
        <p>You will always be in charge of your own plan.</p>
      </Col>
    </Row>
  </Container>
);

export default UpdateAPlan;
