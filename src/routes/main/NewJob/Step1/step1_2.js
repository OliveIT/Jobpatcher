import React, {Component} from "react";
import { Select} from "antd";
import {Col, Row} from "antd";
import { injectIntl } from 'react-intl';
import SearchBar from "components/AddJob/SearchBar";
import Widget from "components/Widget";
import PrivateNoteWidget from "components/AddJob/PrivateNoteWidget";
import UploadFileWidget from "components/AddJob/UploadFileWidget";
import {GoogleMap, OverlayView, StreetViewPanorama, withGoogleMap} from "react-google-maps";

const coordinates = {lat: 49.2853171, lng: -123.1119202};
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={coordinates}
    />
));

const STYLES = {
  overlayView: {
    background: `red`,
    color: `white`,
    padding: 5,
    borderRadius: `50%`,
  },
};

function getPixelPositionOffset(width, height) {
  return {x: -(width / 2), y: -(height / 2)};
}

const StreetViewPanoramaExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={coordinates}
  >
    <StreetViewPanorama
      defaultPosition={coordinates}
      visible
    >
      <OverlayView
        position={{lat: 49.28590291211115, lng: -123.11248166065218}}
        mapPaneName={OverlayView.OVERLAY_LAYER}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        <div style={STYLES.overlayView}>
          OverlayView
        </div>
      </OverlayView>
    </StreetViewPanorama>
  </GoogleMap>
));

class Step1_2 extends Component {

    constructor(props, context) {
        super(props, context);

    }
    
  render() {
    return (
        <div className="gx-main-content-container gx-mt-30 gx-addjob-step1-2">
            <Row style={{justifyContent: "center"}}>
                <Col  xxl={20} xl={20} lg={24} md={24} sm={24} xs={24}>
                    <Row>
                        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24} style={{paddingLeft:33}}>
                            <div style={{display: "flex", justifyContent:"space-between",alignItems:"center"}}>
                                <h3 style={{paddingBottom:10}}>
                                    Search customer
                                </h3>
                                <a className="gx-nav-btn gx-nav-new-btn gx-mb-0 gx-addjob-new-customer">
                                    <div className="gx-div-align-center">
                                        <i className="material-icons gx-fs-xl gx-mr-2">add</i>
                                        New customer
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gx-addjob-step1-2-lastcard">
                        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                            <Row>
                                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                                    <SearchBar />
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                                    {/* <GoogleMapWrapper style={{padding:0}}/> */}
                                    <Widget styleName="gx-card-full gx-dispatcher-job-panel gx-m-0">
                                        <div className="gx-panel-title-bar ">
                                            <h5>
                                                CUSTOMER
                                            </h5>
                                        </div>
                                        <div className="gx-panel-content">
                                        <StreetViewPanoramaExampleGoogleMap
                                                loadingElement={<div style={{height: `100%`}}/>}
                                                containerElement={<div style={{height: `190px`}}/>}
                                                mapElement={<div style={{height: `100%`}}/>}
                                            />
                                        </div>
                                        <div className="gx-addjob-customer-widget" style={{padding:10}}>
                                            <div className="gx-addjob-customer-widget-item">
                                                <span className="gx-addjob-customer-widget-text" style={{fontWeight:700}}>Peter Goldberg</span>
                                                <i className="material-icons gx-addjob-customer-widget-icon">account_circle</i>
                                            </div>
                                            <div className="gx-addjob-customer-widget-item">
                                                <span className="gx-addjob-customer-widget-text">701 S Harrison Ave <br/> Kankakee, IL 60901</span>
                                                <i className="material-icons gx-addjob-customer-widget-icon">room</i>
                                            </div>
                                            <div className="gx-addjob-customer-widget-item">
                                                <span className="gx-addjob-customer-widget-text">(688)-829-0483</span>
                                                <i className="material-icons gx-addjob-customer-widget-icon">local_phone</i>
                                            </div>
                                            <div className="gx-addjob-customer-widget-item">
                                                <span className="gx-addjob-customer-widget-text">perterjackson@website.com</span>
                                                <i className="material-icons gx-addjob-customer-widget-icon">email</i>
                                            </div>
                                        </div>
                                        <div style={{height:50,width:"100%",borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTop:"#e5e5e5 1px solid",backgroundColor:"#f7f6f6",padding:5, alignItems:"center", display: "flex"}}>
                                            <i className="material-icons gx-addjob-customer-widget-icon" style={{color:"#b5b5b5",paddingLeft:8,fontSize:19, marginRight:8}}>contacts</i>
                                            <span className="gx-addjob-customer-widget-text" style={{color:"#b5b5b5"}}>Customer jobs history</span>
                                            <i className="material-icons gx-addjob-customer-widget-icon" style={{color:"#b5b5b5",float:"right", marginLeft:"auto", fontSize:19, marginRight:15}}>keyboard_arrow_right</i>
                                        </div>
                                    </Widget>
                                    
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                                    <Widget styleName="gx-card-full gx-dispatcher-job-panel gx-m-0">
                                        <div className="gx-panel-title-bar ">
                                            <h5>
                                                SERVICE ADDRESS
                                            </h5>
                                        </div>
                                        <div className="gx-panel-content">
                                            <SimpleMapExampleGoogleMap 
                                                loadingElement={<div style={{height: `100%`}}/>}
                                                containerElement={<div style={{height: `410px`}}/>}
                                                mapElement={<div style={{height: `100%`}}/>}
                                                />
                                        </div>
                                    </Widget>
                                    
                                </Col>
                            </Row>
                        </Col>

                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <Row>
                                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                                    <PrivateNoteWidget style={{padding:0}}/>
                                </Col>
                                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                                    <UploadFileWidget style={{padding:0}}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
  }
};

export default injectIntl(Step1_2);