import React, {Component} from "react";
import {Button, Select, Avatar, Tag } from "antd";
import { injectIntl } from 'react-intl';
import TopMenu from "./TopMenu";
import {GoogleMap, OverlayView, withGoogleMap} from "react-google-maps";
import DispatchDrawer from "./DispatchDrawer";
import GpsDrawer from "./GpsDrawer";

const coordinates = {lat: 49.2853171, lng: -123.1119202};
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={coordinates}
    />
));

class DispatchGps extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    render() {
        const {intl: {formatMessage}} = this.props;
        const { jobs, scheduled, duration } = this.state;
        
        return (
            <div className="gx-main-content">
                <TopMenu currentPage="3" />
                <div className="gx-app-module gx-dispatch-module"> 

                    <div className="gx-customer-sidenav gx-ss-gps-sidenav">
                        <GpsDrawer/>
                    </div>

                    <div className="gx-w-100">
                        <div className="gx-dispatch-module-scroll">
                            <div className="gx-dispatch-module-content">    
                                <SimpleMapExampleGoogleMap 
                                    loadingElement={<div style={{height: `100%`}}/>}
                                    containerElement={<div className="gx-dispatch-gps-googlemap-container"/>}
                                    mapElement={<div style={{height: `100%`}}/>}
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>            
            </div>
        );
    }
};

export default injectIntl(DispatchGps);
