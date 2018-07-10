import React, {Component} from "react";
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Footer from "./NavAndFoot/Footer";
import CreateVacation from "./Vacations/CreateVacation";
import Vacations from "./Vacations/Vacations";
import GoogleMaps from "./Map/GoogleMaps";
import ProtectedRoute from "./ProtectedRoute";
import {Route, Switch, withRouter, Redirect} from "react-router-dom";
import {verify} from "./redux/auth";
import {connect} from "react-redux";
import "./index.css";

class App extends Component {
    componentDidMount = () => {
        this.props.verify();
    }
    render(){
        const {isAuthenticated, loading} = this.props.user;
        return(
            <div>
                {loading ?
                    <div>Loading User Data...</div>
                    :
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/signup" render={props => isAuthenticated ? 
                    <Redirect to="/createVacation"/> : <SignUp {...props}/>}/>
                    <Route path="/login" render={props => isAuthenticated ? 
                    <Redirect to="/createVacation"/> : <Login {...props}/>}/>
                    <Route path="/vacations" component={Vacations}/>
                    <ProtectedRoute path="/createVacation" component={CreateVacation}/>
                    <ProtectedRoute path="/vacationsMap" component={GoogleMaps}/>
                </Switch>
                    }
                <Footer/>
            </div>
        )
    }
}

export default withRouter(connect(state => state, {verify})(App));