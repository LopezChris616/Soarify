import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";

class ProtectedRoute extends Component {
    render(){
        const {isAuthenticated, path} = this.props.user;
        const Component = this.props.component;
        return(
            isAuthenticated ? <Route path={path} component={Component}/> :
            <Redirect to="/"/>
        )
    }
}

export default connect(state => state, {})(ProtectedRoute);