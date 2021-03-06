import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { login } from '../redux/auth';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = { username: '',
      password: '' };
  }

  componentDidMount() {
    document.title = 'Login';
  }

    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const { username, password } = this.state;
      const { loginConnect } = this.props;
      loginConnect({ username,
        password });
      this.setState({ username: '',
        password: '' });
    }

    render() {
      const { user } = this.props;
      const { username, password } = this.state;
      const authErrCode = user.authErrCode.login;
      let errMsg = '';
      if (authErrCode < 500 && authErrCode > 399) {
        errMsg = 'Invalid username or password!';
      } else if (authErrCode > 499) {
        errMsg = 'Server error!';
      }
      return (
        <div id="login">
          <Container>
            <h1>Login</h1>
            <p>{errMsg}</p>
            <Form onSubmit={this.handleSubmit}>
              <Row form>
                <Col xs="12" lg="5">
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" onChange={this.handleInputChange} value={username} />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col xs="12" lg="5">
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" onChange={this.handleInputChange} value={password} />
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary" size="lg">Login</Button>
              <Link to="/signup" id="login-signup-link">Need an account?</Link>
            </Form>
          </Container>
        </div>
      );
    }
}

export default connect(state => state, { loginConnect: login })(LoginForm);
