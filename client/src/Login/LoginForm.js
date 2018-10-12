import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/auth";
import { Link } from  "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class LoginForm extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount(){
        document.title = "Login";
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.login({
            username: this.state.username,
            password: this.state.password
        })
        this.setState({
            username: "",
            password: ""
        })
    }

    render(){
        let authErrCode = this.props.user.authErrCode.login;
        let errMsg = "";
        if (authErrCode < 500 && authErrCode > 399) {
            errMsg = "Invalid username or password!";
        } else if (authErrCode > 499) {
            errMsg = "Server error!";
        }
        return(
            <div id="login">
                <Container>
                    <h1>Login</h1>
                    <p>{errMsg}</p>
                    <Form onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col xs="12" lg="5">
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" name="username" id="username" onChange={this.handleInputChange} value={this.state.username} />  
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col xs="12" lg="5">
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password" onChange={this.handleInputChange} value={this.state.password} />  
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color="primary" size="lg">Login</Button>
                        <Link to="/signup" id="login-signup-link">Need an account?</Link>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default connect(state => state, {login})(LoginForm);





                // <h1>Login to view your vacation plans!</h1>
                // <p>{errMsg}</p>
                // <form id="signupLogin" onSubmit={this.handleSubmit}>
                //     <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} value={this.state.username}/>
                //     <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} value={this.state.password}/>
                //     <button>Submit</button>
                // </form>