import React, {Component} from "react";
import {connect} from "react-redux";
import {login} from "./redux/auth";

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
        console.log( )
        this.setState({
            username: "",
            password: ""
        })
    }

    render(){
        return(
            <div id="signupLoginForm">
                <h1>Login to view your vacation plans!</h1>
                <form id="signupLogin" onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} value={this.state.username}/>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} value={this.state.password}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {login})(LoginForm);
