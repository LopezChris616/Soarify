import React, {Component} from "react";
import {connect} from "react-redux";
import {logout} from "./redux/auth";
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
        return(
            <div className="navbarDisplay">
                    <div id="navbar">
                        <Link to="/" id="navbarHome">Vacation Planner</Link>
                        <Link to="/signup" className="navbarAlign">Sign Up</Link>
                        <Link to="/login" className="navbarAlign">Login</Link>
                        <Link to="/vacations" className="navbarAlign">View Your Vacation Plans</Link>
                        <button onClick={this.props.logout}>Logout</button>
                        {/* <Link to="/createVacation" className="navbarAlign">Create A Vacation Plan</Link>
                        <Link to="/googleMaps" className="navbarAlign">View In Map</Link> */}
                    </div>
            </div>
        )
    }
}

export default connect(null, {logout})(Navbar);