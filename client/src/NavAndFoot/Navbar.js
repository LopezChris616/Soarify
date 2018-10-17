import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { logout } from '../redux/auth';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { navCollapsed: false };
  }

    navbarToggle = () => {
      const { navCollapsed } = this.state;
      this.setState({ navCollapsed: !navCollapsed });
    }

    render() {
      const { user, logoutConnect } = this.props;
      const { navCollapsed } = this.state;
      return (
        <div>
          <Navbar color="dark" dark>
            <NavbarBrand tag={Link} to="/" className="mr-auto">Soarify</NavbarBrand>
            <NavbarToggler onClick={this.navbarToggle} className="mr-2" />
            <Collapse isOpen={navCollapsed} navbar>
              <Nav navbar>
                <NavItem>
                  {!user.isAuthenticated && <NavLink tag={Link} to="/signup">Sign Up</NavLink>}
                  {user.isAuthenticated && <NavLink tag={Link} to="/createVacation">View Your Vacation Plans</NavLink>}
                </NavItem>
                <NavItem>
                  {!user.isAuthenticated && <NavLink tag={Link} to="/login">Login</NavLink>}
                  {user.isAuthenticated && <NavLink tag={Link} to="/vacationsMap">View On Google Maps</NavLink>}
                </NavItem>
                <NavItem>
                  {user.isAuthenticated && <Button color="secondary" outline size="sm" onClick={logoutConnect}>Logout</Button>}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
}

export default connect(state => state, { logoutConnect: logout })(Navigation);
