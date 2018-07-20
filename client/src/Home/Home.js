import React, {Component} from "react";
import HomeContent from "./HomeContent"; 
import {Link} from  "react-router-dom";
import {connect} from "react-redux";

class Home extends Component {
    constructor(){
        super();
    }
    render(){
        const {isAuthenticated} = this.props.user;
        return(
            <div>

                <div id="homeMain">
                    <h1>Soarify</h1>
                    <h3>Soar To The Vacation of Your Dreams!</h3>
                    {!isAuthenticated && <Link to="/signup" className="vacationLinks">Sign Up</Link>}
                    {!isAuthenticated && <Link to="/login" className="vacationLinks">Login</Link>}
                    {isAuthenticated && <Link to="/createVacation" className="vacationLinks">View Your Vacation Plans</Link>}
                    {isAuthenticated && <Link to="/vacationsMap" className="vacationLinks">View On Map</Link>}
                </div>
  
                <div id="homeContent">
                    <HomeContent
                    class="vacaPlanInfoLeft" 
                    title="Create Your Plan" 
                    image="https://images.unsplash.com/photo-1494380523890-2c3c1a3ea750?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=58e1a210219d647e7d409138ddb7bf2f&auto=format&fit=crop&w=1651&q=80"
                    info1="Organized and straight to the point, our planning system gives you everything you need to ensure that you plan your trip the way you want to!"
                    info2="We'll let you know when your trip is approaching and let you know once everything is ready."
                    alt="man relaxing on beach"
                    titleContent="homeTitleContent"
                    />

                    <HomeContent 
                    class="vacaPlanInfoRight" 
                    title="Update/Change Your Plan" 
                    image="https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-0.3.5&s=f76b99a0dc2aa16bf7dec2bfcf3edede&auto=format&fit=crop&w=1650&q=80"
                    info1="Need to update the target date of your vacation? Maybe change who's going? You have the ability to update whatever area of your plan that you deem neccessary."
                    info2="You will always be in charge of your own plan."
                    alt="woman looking at the view from the top of a mountain"
                    titleContent="homeTitleContent"
                    />

                    <HomeContent 
                    class="vacaPlanInfoLeft" 
                    title="View On Google Maps" 
                    image="https://images.unsplash.com/photo-1519659675643-e5885721661f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3da8dd6e70d17bd7be1c76cff7c3ac5e&auto=format&fit=crop&w=1650&q=80"
                    info1="Not sure where to go next? Maybe you'd like a visual representation of where you are planning on going? We've got the perfect solution!"
                    info2="We have integrated Google Maps to help you ensure that you have made the right decision on your choice for your next vacation and to help you figure out where you'd like to go to next"
                    alt="snowboarders on a snow-filled mountain"
                    titleContent="homeTitleContent"
                    />
                    
                </div>
                <div id="getStarted">
                    <h1>Your next vacation begins today!</h1>
                    <Link to="/signup" id="getStartedLink">Get Started Now!</Link>
                </div>
            </div>
        )
    }

}

export default connect(state => state, {})(Home);