import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import Navbar from "../NavAndFoot/Navbar";
import { connect } from "react-redux";
import { getVacations } from "../redux/vacations";
import { Row, Col } from "reactstrap";
import Geocode from "react-geocode";

class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [],
      lat: 44.50,
      lng: -94.35,
      zoom: 4,
      zoomedOut: true,
    }
  }

  componentDidMount = () => {
    this.props.getVacations().then(() => {
        const coordinates = this.props.vacations.vacations.map(coordinate => {
            Geocode.setApiKey("AIzaSyDCU_sR1UA5seRsI-3OuP-jHKEkr06TZPk");
            const convert = Geocode.fromAddress(coordinate.location);
            return convert;
          })
          Promise.all(coordinates).then(locations => {
            const markers = locations.map(place => {
              const lat = place.results[0].geometry.location.lat;
              const lng = place.results[0].geometry.location.lng;
              return (
                  <Marker key={place.results[0].place_id} 
                  position={{lat: lat, lng: lng}} 
                  animation={2} 
                  onClick={() => 
                    this.state.zoomedOut ? 
                    this.setState(prevState => {
                      return {
                        zoom: 14, 
                        lat: lat, 
                        lng: lng, 
                        zoomedOut: !prevState.zoomedOut
                        }
                    })
                     : this.setState(prevState => {
                      return {
                        zoomedOut: !prevState.zoomedOut,
                        lat: 39.50,
                        lng: -94.35,
                        zoom: 4
                      }
                    })}/>
              )
            })
            this.setState({
              coords: markers
            })
          })
     });

     document.title = "Vacations Map";
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
          <div>
              <Map 
              google={this.props.google}
              zoom={this.state.zoom} 
              center={{lat: this.state.lat, lng: this.state.lng}}>
              {this.state.coords}
              </Map>
          </div>
        </div>
      </div>
    )
  }
}
const connectVaca = connect(state => ({vacations: state}), dispatch => {return { getVacations: () => dispatch(getVacations()) }})(GoogleMaps);

export default GoogleApiWrapper({
    apiKey: "AIzaSyDCU_sR1UA5seRsI-3OuP-jHKEkr06TZPk"
})(connectVaca)