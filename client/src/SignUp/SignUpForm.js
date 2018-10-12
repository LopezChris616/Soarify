import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../redux/auth";
import { Link } from  "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class SignUpForm extends Component {
    constructor(){
        super();

        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        }
    }

    componentDidMount(){
        document.title = "Sign Up"
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.signup({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password
        })

        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        })
    }
 
    render(){
        let authErrCode = this.props.user.authErrCode.signup;
        let errMsg = "";
        if (authErrCode < 500 && authErrCode > 399) {
            errMsg = "Username is already taken!";
        } else if (authErrCode > 499) {
            errMsg = "Server error!";
        }
        return(
            <div id="sign-up">
                <Container>
                    <h1>Sign Up</h1>
                    <p>{errMsg}</p>
                    <Form onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col xs="12" md="4">
                                <FormGroup>
                                    <Label for="first-name">First Name</Label>
                                    <Input type="text" name="firstName" id="first-name" onChange={this.handleInputChange} value={this.state.firstName} />                                    
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4">
                                <FormGroup>
                                    <Label for="last-name">Last Name</Label>
                                    <Input type="text" name="lastName" id="last-name" onChange={this.handleInputChange} value={this.state.lastName} />                                    
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col xs="12" md="4">
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" name="username" id="username" onChange={this.handleInputChange} value={this.state.username} />                                    
                                </FormGroup>
                            </Col>
                            <Col xs="12" md="4">
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password" onChange={this.handleInputChange} value={this.state.password} />                                    
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color="primary" size="md">Sign Up</Button>
                        <Link to="/login" id="login-signup-link">Already have an account?</Link>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default connect(state => state, {signup})(SignUpForm);