import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/auth";
import SignUpForm from "../SignUp/SignUpForm";

const NavbarItems = props => {
    const { isAuthenticated } = props.user;
    const { classes } = props;
    return (
        <div className={classes.root}>
          
        </div>
    );
}

export default connect(state => state, {logout})(NavbarItems);

//   <List component="nav">
//                 <ListItem button component={Link} to="/">
//                 <ListItemIcon>
//                     <HomeIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Home" className={classes.navText}/>
//                 </ListItem>
//                 <Divider />
//                 <ListItem button component={Link} to="/signup">
//                 <ListItemIcon>
//                     <SignUpIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Sign Up" />
//                 </ListItem>
//                 <ListItem button component={Link} to="/login">
//                 <ListItemIcon>
//                     <LoginIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Login" />
//                 </ListItem>
//             </List>