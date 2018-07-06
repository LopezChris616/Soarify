import React from "react";
import Navbar from "../NavAndFoot/Navbar";
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

