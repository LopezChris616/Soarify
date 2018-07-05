import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import Footer from "./Footer";
import CreateVacation from "./CreateVacation";
import Vacations from "./Vacations";
import GoogleMaps from "./GoogleMaps";
import "./index.css";

const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={Login}/>
                <Route path="/vacations" component={Vacations}/>
                <Route path="/createVacation" component={CreateVacation}/>
                <Route path="/googleMaps" component={GoogleMaps}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;