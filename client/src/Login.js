import React, {Component} from "react";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";

const Login = () => {
    return(
        <div id="signupLoginGrid">
            <Navbar/>
            <LoginForm/>
        </div>
    )
}

export default Login;