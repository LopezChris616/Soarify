import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { signup } from '../redux/auth';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = { firstName: '',
      lastName: '',
      username: '',
      password: '' };
  }

  componentDidMount() {
    document.title = 'Sign Up';
  }

    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
      event.preventDefault();

      const { firstName, lastName, username, password } = this.state;
      this.props.signup({ firstName,
        lastName,
        username,
        password });

      this.setState({ firstName: '',
        lastName: '',
        username: '',
        password: '' });
    }

    render() {
      const { user } = this.props;
      const authErrCode = user.authErrCode.signup;
      const { firstName, lastName, username, password } = this.state;
      let errMsg = '';
      if (authErrCode < 500 && authErrCode > 399) {
        errMsg = 'Username is already taken!';
      } else if (authErrCode > 499) {
        errMsg = 'Server error!';
      }
      return (
        <div id="sign-up">
          <Container>
            <h1>Sign Up</h1>
            <p>{errMsg}</p>
            <Form onSubmit={this.handleSubmit}>
              <Row form>
                <Col xs="12" md="4">
                  <FormGroup>
                    <Label for="first-name">First Name</Label>
                    <Input type="text" name="firstName" id="first-name" onChange={this.handleInputChange} value={firstName} />
                  </FormGroup>
                </Col>
                <Col xs="12" md="4">
                  <FormGroup>
                    <Label for="last-name">Last Name</Label>
                    <Input type="text" name="lastName" id="last-name" onChange={this.handleInputChange} value={lastName} />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col xs="12" md="4">
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" onChange={this.handleInputChange} value={username} />
                  </FormGroup>
                </Col>
                <Col xs="12" md="4">
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" onChange={this.handleInputChange} value={password} />
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary" size="md">Sign Up</Button>
              <Link to="/login" id="login-signup-link">Already have an account?</Link>
            </Form>
          </Container>
        </div>
      );
    }
}

export default connect(state => state, { signup })(SignUpForm);
