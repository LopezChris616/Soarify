import React, {Component} from "react";
import {connect} from "react-redux";
import {login} from "./redux/auth";
import { POINT_CONVERSION_COMPRESSED } from "constants";

class LoginForm extends Component {
    constructor(){
        super();

        this.state = {
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
            <div id="signupLoginForm">
                <h1>Login to view your vacation plans!</h1>
                <p>{errMsg}</p>
                <form id="signupLogin" onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} value={this.state.username}/>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} value={this.state.password}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(state => state, {login})(LoginForm);
