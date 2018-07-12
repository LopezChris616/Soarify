import React, {Component} from "react";
import {connect} from "react-redux";
import {logout} from "../redux/auth";
import {Link} from "react-router-dom";

class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            navbarDisplayed: false
        }
    }
    
    handleNav = () => {
        this.setState(prevState => {
            return {
                navbarDisplayed: !prevState.navbarDisplayed
            }
        })
    }

    render(){
        const {isAuthenticated} = this.props.user;
        return(
                <div id="navbar">
                    <Link to="/" id="navbarHome">Vacation Planner</Link>
                    {!isAuthenticated && <Link to="/signup" className="navbarAlign">Sign Up</Link>}
                    {!isAuthenticated && <Link to="/login" className="navbarAlign">Login</Link>}
                    {isAuthenticated && <Link to="/createVacation" className="navbarAlign">View Your Vacation Plans</Link>}
                    {isAuthenticated && <Link to="/vacationsMap" className="navbarAlign">View On Map</Link>}
                    {isAuthenticated && <button onClick={this.props.logout}>Logout</button>}
                    {/* <Link to="/createVacation" className="navbarAlign">Create A Vacation Plan</Link>
                    <Link to="/googleMaps" className="navbarAlign">View In Map</Link> */}
                </div>
        )
    }
}

export default connect(state => state, {logout})(Navbar);