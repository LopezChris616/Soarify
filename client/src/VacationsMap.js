import React, {Component} from "react";
import {connect} from "react-redux";
import {getVacations} from "./redux";
import Geocode from "react-geocode";
import ReactDOM from "react-dom";
import GoogleMaps from "./GoogleMaps";

class VacationsMap extends Component {
    constructor(){
        super();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.google !== this.props.google){
            this.loadMap();
        }
    }

    componentDidMount = () => {
        this.props.getVacations();
    }

    loadMap = () => {
        if(this.props && this.props.google){
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);
            let zoom = 10;
            let lat = 80.1918;
            let lng = 25.7617;
            const center = new maps.LatLng(lat, lng);
            const mapInfo = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapInfo);
        }
    }

    

    render(){
        console.log(this.props);
        return(
            <div ref="map">
                Loading Map...
            </div>
        )
    }
}

export default connect(state => ({vacations: state}), {getVacations}) (VacationsMap);