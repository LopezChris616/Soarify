import React, {Component} from "react";
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm";

const SignUp = () => { 
    return(
        <div id="signupLoginGrid">
            <Navbar/>
            <SignUpForm/>
        </div>
    )
}

export default SignUp;

