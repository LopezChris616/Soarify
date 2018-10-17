import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import Geocode from 'react-geocode';
import Navbar from '../NavAndFoot/Navbar';
import { getVacations } from '../redux/vacations';

class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = { coords: [],
      lat: 44.50,
      lng: -94.35,
      zoom: 4,
      zoomedOut: true };
  }

  componentDidMount = () => {
    const { vacations, getVacationsConnect } = this.props;
    const { zoomedOut } = this.state;
    getVacationsConnect().then(() => {
      const coordinates = vacations.vacations.map((coordinate) => {
        Geocode.setApiKey('AIzaSyDCU_sR1UA5seRsI-3OuP-jHKEkr06TZPk');
        const convert = Geocode.fromAddress(coordinate.location);
        return convert;
      });
      Promise.all(coordinates).then((locations) => {
        const markers = locations.map((place) => {
          const { lat, lng } = place.results[0].geometry.location;
          const latitude = lat;
          const longitude = lng;
          return (
            <Marker
              key={place.results[0].place_id}
              position={{ lat, lng }}
              animation={2}
              onClick={() => (zoomedOut
                ? this.setState(prevState => ({ zoom: 14,
                  latitude,
                  longitude,
                  zoomedOut: !prevState.zoomedOut }))
                : this.setState(prevState => ({ zoomedOut: !prevState.zoomedOut,
                  lat: 39.50,
                  lng: -94.35,
                  zoom: 4 })))}
            />
          );
        });
        this.setState({ coords: markers });
      });
    });

    document.title = 'Vacations Map';
  }

  render() {
    const { google } = this.props;
    const { lat, lng, coords, zoom } = this.state;
    return (
      <div>
        <div>
          <Navbar />
          <div>
            <Map
              google={google}
              zoom={zoom}
              center={{ lat, lng }}
            >
              {coords}
            </Map>
          </div>
        </div>
      </div>
    );
  }
}
const connectVaca = connect(state => ({ vacations: state }),
  dispatch => ({ getVacationsConnect: () => dispatch(getVacations()) }))(GoogleMaps);

export default GoogleApiWrapper({ apiKey: 'AIzaSyDCU_sR1UA5seRsI-3OuP-jHKEkr06TZPk' })(connectVaca);
