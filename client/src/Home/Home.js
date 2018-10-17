import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import CreatePlanContainer from './CreatePlanContainer';
import HomeHeader from './HomeHeader';
import UpdateAPlan from './UpdateAPlan';
import ViewOnMap from './ViewOnMap';
import GetStarted from './GetStarted';
import Footer from '../NavAndFoot/Footer';

class Home extends Component {
    componentDidMount = () => {
      document.title = 'Soarify | Soar To The Vacation of Your Dreams!';
    }

    render() {
      return (
        <div id="app-container">
          <HomeHeader />
          <h2 style={{ textAlign: 'center', textDecoration: 'underline', paddingTop: '40px' }}>Create A Plan</h2>
          <Container style={{ padding: '50px 10px' }}>
            <CreatePlanContainer />
          </Container>
          <div style={{ backgroundColor: '#007BFF', padding: '100px 10px' }}>
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
      );
    }
}
export default connect(state => state, {})(Home);
