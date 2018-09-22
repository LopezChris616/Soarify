import React, { Component } from "react";
import HomeContent from "./HomeContent"; 
import { Link } from  "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
    constructor(){
        super();
    }

    componentDidMount = () => {
        document.title = "Soarify | Soar To The Vacation of Your Dreams!";
    }

    render(){
        const {isAuthenticated} = this.props.user;
        const aboutSoarify = [
            {
                title: "Create Your Plan",
                image: "https://images.unsplash.com/photo-1494380523890-2c3c1a3ea750?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=58e1a210219d647e7d409138ddb7bf2f&auto=format&fit=crop&w=1651&q=80",
                info1: "Organized and straight to the point, our planning system gives you everything you need to ensure that you plan your trip the way you want to!",
                info2: "We'll let you know when your trip is approaching and let you know once everything is ready.",
                alt: "man relaxing on beach"
            },
            {
                title: "Update/Change Your Plan",
                image: "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-0.3.5&s=f76b99a0dc2aa16bf7dec2bfcf3edede&auto=format&fit=crop&w=1650&q=80",
                info1: "Need to update the target date of your vacation? Maybe change who's going? You have the ability to update whatever area of your plan that you deem neccessary.",
                info2: "You will always be in charge of your own plan.",
                alt: "woman looking at the view from the top of a mountain"
            },
            {
                title: "Update/Change Your Plan",
                image: "https://images.unsplash.com/photo-1519659675643-e5885721661f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3da8dd6e70d17bd7be1c76cff7c3ac5e&auto=format&fit=crop&w=1650&q=80",
                info1: "Not sure where to go next? Maybe you'd like a visual representation of where you are planning on going? We've got the perfect solution!",
                info2: "We have integrated Google Maps to help you ensure that you have made the right decision on your choice for your next vacation and to help you figure out where you'd like to go to next",
                alt: "snowboarders on a snow-filled mountain"
            }
        ]

        const displayAbout = aboutSoarify.map(section => {
            return (
                <HomeContent 
                title={section.title}
                image={section.image}
                info1={section.info1}
                info2={section.info2}
                alt={section.alt}
                />
            )
        })
        return(
            <div>
                <header id="home-header">
                    <div id="header-content">
                    <h1>Soarify</h1>
                   <h3>Plan Your Next Vacation At Ease!</h3>
                   {!isAuthenticated && <Link to="/signup">Sign Up</Link>}
                   {!isAuthenticated && <Link to="/login">Login</Link>}
                   {isAuthenticated && <Link to="/createVacation">View Your Vacation Plans</Link>}
                   {isAuthenticated && <Link to="/googleMaps">View On Google Maps</Link>}
                    </div>

                </header>
  
                <div>
                    {displayAbout}
                </div>
                <div id="getStarted">

                    {/* {!isAuthenticated && <Link to="/signup" id="getStartedLink">Get Started Now!</Link>} */}
                    {/* {isAuthenticated && <Link to ="/createVacation" id="getStartedLink">View Your Vacations</Link>} */}
                </div>
            </div>
        )
    }

}
export default connect(state => state, {})(Home);


          {/* <Grid container justify="center" direction="row" alignContent="center" style={{height: "inherit", textAlign: "center"}}>
                        <Grid item xs={12}>
                            <Typography variant="display4" className={classes.homeIntro} id="title">Soarify</Typography>
                        </Grid>
                         
                        <Grid item xs={12}>
                            <Typography variant="display3" className={classes.homeIntro}>Plan Your Vacation At Ease!</Typography>
                        </Grid>

                        {!isAuthenticated && 
                        <Button variant="contained" color="primary" component={Link} to="/signup" className={classes.button}>
                            Sign Up
                        </Button>}

                        {!isAuthenticated && 
                        <Button variant="contained" color="primary" component={Link} to="/login" className={classes.button}>
                            Login
                        </Button>}

                        {isAuthenticated &&
                        <Button variant="contained" color="primary" component={Link} to="/createVacation" className={classes.button}>
                            View Your Vacation Plans
                        </Button>}

                        {isAuthenticated &&
                        <Button variant="contained" color="primary" component={Link} to="/vacationsMap" className={classes.button}>
                            View On Google Maps
                        </Button>}
                    </Grid> */}



//   <Typography variant="display3" className={classes.homeIntro} style={{color: "white", marginTop: 15}}>
//                         Your next vacation begins today!
//                     </Typography>
//                     {!isAuthenticated && 
//                         <Button variant="contained" color="primary" component={Link} to="/signup" style={{marginBottom: 15}} size="large">
//                             Get Started Now!
//                         </Button>}

//                         {isAuthenticated && 
//                         <Button variant="contained" color="primary" component={Link} to="/createVacation" className={classes.button} size="large">
//                             View Your Vacations
//                         </Button>}