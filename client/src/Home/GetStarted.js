import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const GetStarted = (props) => {
  const { user } = props;
  return (
    <div id="get-started">
      <Container style={{ padding: '50px 10px' }}>
        <Row>
          <Col>
            <h1>Your Next Vacation Begins Today!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {!user.isAuthenticated && <Button tag={Link} color="primary" size="lg" to="/signup">Get Started</Button>}
            {user.isAuthenticated && <Button tag={Link} color="primary" to="/createVacation">View Your Vacation Plans</Button>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(state => state, {})(GetStarted);
