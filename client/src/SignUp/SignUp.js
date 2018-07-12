import React from "react";
import Navbar from "../NavAndFoot/Navbar";
import SignUpForm from "./SignUpForm";

const SignUp = () => { 
    return(
        <div id="signUpContainer">
            <Navbar/>
            <SignUpForm/>
        </div>
    )
}

export default SignUp;

