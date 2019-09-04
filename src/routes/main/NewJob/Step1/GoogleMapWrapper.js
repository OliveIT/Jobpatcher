import React, { Component, Fragment } from "react";

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";


class GoogleMapWrapper extends Component{

    static defaultProps = {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPMp6gbSEykgMg69xnpGk-rztqJ7NbCpA&v=3.exp&libraries=geometry,drawing,places",
    }

    constructor(props) {
        super(props);
    }



    CMap = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {props.children}
        </GoogleMap>
      ));



    render() {
        return (
            <Fragment>
                <this.CMap
                    googleMapURL={this.props.googleMapURL}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `700px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    center= {{ lat: 25.03, lng: 121.6 }} 
                >
                    <Marker
                        position={{ lat: -34.397, lng: 150.644 }}
                    />
                </this.CMap>
            </Fragment>
        );
    }
}


export default GoogleMapWrapper;