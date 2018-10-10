import React, { Component } from "react";
import CreatePlanContainer from "./CreatePlanContainer";
import HomeHeader from "./HomeHeader";
import UpdateAPlan from "./UpdateAPlan";
import ViewOnMap from "./ViewOnMap";
import GetStarted from "./GetStarted";
import Footer from "../NavAndFoot/Footer"
import { Link } from  "react-router-dom";
import { connect } from "react-redux";
import { Container } from 'reactstrap';

class Home extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        document.title = "Soarify | Soar To The Vacation of Your Dreams!";
    }

    render(){
        return(
            <div>
                <HomeHeader />



                {/* won't remove this  until I'm sure that I don't need it anymore */}
                {/* <header id="home-header">
                    <Container id="home-intro">
                        <Row>
                            <Col><h1>Soarify</h1></Col>
                        </Row>
                        <Row>
                            <Col><h3>Soar To The Vacations of Your Dreams!</h3></Col>
                        </Row>
                        <Row>
                            <Col>
                                {!isAuthenticated && <Button color="primary" size="lg" tag={Link} to="/signup">Sign Up</Button>}
                                {isAuthenticated && <Button color="primary" size="lg" tag={Link} to="/createVacation">View Your Vacation Plans</Button>}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {!isAuthenticated && <Button color="primary" size="lg" tag={Link} to="/login">Login</Button>}
                                {isAuthenticated && <Button color="primary" size="lg" tag={Link} to="/googleMaps">View On Google Maps</Button>}
                            </Col>
                        </Row>
                    </Container>
                </header> */}



                <h2 style={{textAlign: "center", textDecoration: "underline", paddingTop: "40px"}}>Create A Plan</h2>
                <Container style={{padding: "50px 10px"}}>
                    <CreatePlanContainer />
                </Container>
                <div style={{backgroundColor: "#007BFF", padding: "100px 10px"}}>
                    <UpdateAPlan />
                </div>
                <div>
                    <ViewOnMap />
                </div>
                <div>
                    <GetStarted />
                </div>
                <Footer />
  
            </div>
        )
    }

}
export default connect(state => state, {})(Home);