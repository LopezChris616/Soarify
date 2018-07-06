import React, {Component} from "react";
import {connect} from "react-redux";
import {signup} from "../redux/auth";

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
            <div id="signupLoginForm">
                <h1>Sign Up to start planning your next vacation!</h1>
                <p>{errMsg}</p>
                <form id="signupLogin" onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange}/>
                    <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange}/>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange}/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(state => state, {signup})(SignUpForm);