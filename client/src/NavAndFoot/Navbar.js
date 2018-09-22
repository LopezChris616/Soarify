import React, {Component} from "react";
import NavbarItems from "./NavbarItems";

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            mobileOpen: false
        }
    }

    handleDrawerToggle = () => {
      this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render(){
        return(
          <div>

          </div>
        )
    }
}

export default Navbar;


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