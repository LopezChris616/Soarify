import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Container, Row, Col } from 'reactstrap';

const HomeHeader = (props) => {
  const { user } = props;
  const { isAuthenticated } = user;
  return (
    <div>
      <header id="home-header">
        <Container id="home-intro">
          <Row>
            <Col><h1>Soarify</h1></Col>
          </Row>
          <Row>
            <Col><h3>Soar To The Vacations of Your Dreams!</h3></Col>
          </Row>
          <Row>
            <Col>
              {!isAuthenticated && <Button color="primary" size="lg" tag={Link} to="/signup">Sign Up</Button>}
              {isAuthenticated && <Button color="primary" size="lg" tag={Link} to="/createVacation">View Your Vacation Plans</Button>}
            </Col>
          </Row>
          <Row>
            <Col>
              {!isAuthenticated && <Button color="primary" size="lg" tag={Link} to="/login">Login</Button>}
              {isAuthenticated && <Button color="primary" size="lg" tag={Link} to="/vacationsMap">View On Google Maps</Button>}
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default connect(state => state, {})(HomeHeader);
