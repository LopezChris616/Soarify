import React from "react";
import LoginForm from "./LoginForm";
import Navbar from "../NavAndFoot/Navbar";

const Login = () => {
    return(
        <div id="signupLoginGrid">
            <Navbar/>
            <LoginForm/>
        </div>
    )
}

export default Login;