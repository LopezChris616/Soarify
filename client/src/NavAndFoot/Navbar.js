import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from  "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
                    {isAuthenticated && <NavLink tag={Link} to="/googleMaps">View On Google Maps</NavLink>}
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}

export default connect(state => state, {})(Navigation);


      {/* <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap>
                  Soarify
                </Typography>
              </Toolbar>
            </AppBar>
            <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <NavbarItems />
          </Drawer>
        </Hidden>      
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <NavbarItems />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>   */}