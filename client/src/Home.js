import React, {Component} from "react";
import {Link} from  "react-router-dom";
import {connect} from "react-redux";
import Slide from 'react-reveal/Slide';

class Home extends Component {
    constructor(){
        super();
    }
    render(){
        const {isAuthenticated} = this.props.user;
        return(
            <div>
                <div id="homeMain">
                    <h1>Vacation Planner</h1>
                    <h3>Plan The Vacation of Your Dreams!</h3>
                    {!isAuthenticated && <Link to="/signup" className="vacationLinks">Sign Up</Link>}
                    {!isAuthenticated && <Link to="/login" className="vacationLinks">Login</Link>}
                    {isAuthenticated && <Link to="/createVacation" className="vacationLinks">View Your Vacation Plans</Link>}
                    {isAuthenticated && <Link to="/vacationsMap" className="vacationLinks">View On Map</Link>}
                </div>
                
                <div id="homeContent">
                <Slide left>
                    <div className="vacaPlanInfoLeft">
                        <h2>Create Your Plan</h2>
                        <img src="https://images.unsplash.com/photo-1494380523890-2c3c1a3ea750?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=58e1a210219d647e7d409138ddb7bf2f&auto=format&fit=crop&w=1651&q=80" alt="man relaxing on beach" className="imgSize"/>
                        <p className="paraInfo1">Organized and straight to the point, our planning system gives you everything you need to ensure that you plan your trip the way you want to!</p>
                        <p className="paraInfo2">We'll let you know when your trip is approaching and let you know once everything is ready.</p>
                    </div>
                    </Slide>
                
                    <Slide right>
                    <div className="vacaPlanInfoRight">
                        
                        <h2 className="homeTitleContent">Update/Change Your Plan</h2>
                        <p className="paraInfo1">Need to update the target date of your vacation? Maybe change who's going? You have the ability to update whatever area of your plan that you deem neccessary.</p>
                        <p className="paraInfo2">You will always be in charge of your own plan.</p>
                        <img src="https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-0.3.5&s=f76b99a0dc2aa16bf7dec2bfcf3edede&auto=format&fit=crop&w=1650&q=80" alt="woman looking at the view from the top of a mountain" className="imgSize"/>
                    </div>
                    </Slide>
    
                    <Slide left>
                    <div className="vacaPlanInfoLeft">
                        <h2>View On Google Maps</h2>
                        <img src="https://images.unsplash.com/photo-1519659675643-e5885721661f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3da8dd6e70d17bd7be1c76cff7c3ac5e&auto=format&fit=crop&w=1650&q=80" alt=" snowboarders on a snow-filled mountain" className="imgSize"/>
                        <p className="paraInfo1">Looking for some ideas of where to go on your next vacation? Or maybe you just want to take a sneak peek at where you will be going?</p>
                        <p className="paraInfo2">We have integrated Google Maps to help you ensure that you have made the right decision on your choice for your next vacation.</p>
                    </div>
                    </Slide>
                    
                </div>
                <div id="getStarted">
                    <h1>You next vacation begins today!</h1>
                    <Link to="/signup" id="getStartedLink">Get Started Now!</Link>
                </div>
            </div>
        )
    }
    // const {isAuthenticated} = this.props.user;

}

export default connect(state => state, {})(Home);