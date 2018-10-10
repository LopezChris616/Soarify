import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from  "react-router-dom";
import { logout } from "../redux/auth";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            navCollapsed: false
        }
    }

    navbarToggle = () => {
      this.setState({
        navCollapsed: !this.state.navCollapsed
      })
    }

    render(){
      const {isAuthenticated} = this.props.user;
        return(
          <div>
            <Navbar color="dark" dark>
              <NavbarBrand tag={Link} to="/" className="mr-auto">Soarify</NavbarBrand>
              <NavbarToggler onClick={this.navbarToggle} className="mr-2" />
              <Collapse isOpen={this.state.navCollapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    {!isAuthenticated && <NavLink tag={Link} to="/signup">Sign Up</NavLink>}
                    {isAuthenticated && <NavLink tag={Link} to="/createVacation">View Your Vacation Plans</NavLink>}
                  </NavItem>
                  <NavItem>
                    {!isAuthenticated && <NavLink tag={Link} to="/login">Login</NavLink>}
                    {isAuthenticated && <NavLink tag={Link} to="/vacationsMap">View On Google Maps</NavLink>}
                  </NavItem>
                  <NavItem>
                    {isAuthenticated && <Button color="secondary" outline size="sm" onClick={this.props.logout}>Logout</Button>}
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}

export default connect(state => state, {logout})(Navigation);