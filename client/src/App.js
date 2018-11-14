import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import CreateVacation from './Vacations/CreateVacation';
import Vacations from './Vacations/Vacations';
import GoogleMaps from './Map/GoogleMaps';
import ProtectedRoute from './ProtectedRoute';
import { verify } from './redux/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {
    componentDidMount = () => {
      const { verifyConnect } = this.props;
      verifyConnect();
    }

    render() {
      const { user } = this.props;
      const { isAuthenticated, loading } = user;
      return (
        <div style={{ height: '100%' }}>
          {loading
            ? <h1 style={{ textAlign: 'center', paddingTop: '100px' }}>Loading...</h1>
            : (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  path="/signup"
                  render={props => (isAuthenticated
                    ? <Redirect to="/createVacation" /> : <SignUp {...props} />)}
                />
                <Route
                  path="/login"
                  render={props => (isAuthenticated
                    ? <Redirect to="/createVacation" /> : <Login {...props} />)}
                />
                <Route path="/vacations" component={Vacations} />
                <ProtectedRoute path="/createVacation" component={CreateVacation} style={{ height: '100%' }} />
                <ProtectedRoute path="/vacationsMap" component={GoogleMaps} />
              </Switch>
            )
                    }
        </div>
      );
    }
}

export default withRouter(connect(state => state, { verifyConnect: verify })(App));
