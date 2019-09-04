import React, {Component} from "react";
import { Select} from "antd";
import {Col, Row} from "antd";
import { injectIntl } from 'react-intl';
import SearchBar from "components/AddJob/SearchBar";
import Widget from "components/Widget";
import PrivateNoteWidget from "components/AddJob/PrivateNoteWidget";
import UploadFileWidget from "components/AddJob/UploadFileWidget";
import {GoogleMap, withGoogleMap} from "react-google-maps";
// import GoogleMapWrapper from './GoogleMapWrapper';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{lat: 47.646935, lng: -122.303763}}
    />
));

class Step1_2 extends Component {

  constructor(props, context) {
    super(props, context);

  }
  initStreetView({map, maps}) {
        var sv = new maps.StreetViewService();
        var panorama = new maps.StreetViewPanorama(document.getElementById('map'));
        sv.getPanorama({location: {lat: 37.869, lng: -122.2547}, radius: 50}, processSVData);

        function processSVData(data, status) {
            var marker = new maps.Marker({
                position: data.location.latLng,
                map: map,
                title: data.location.description
            });
            panorama.setPano(data.location.pano)
            panorama.setPov({
                heading: 270,
                pitch: 0
            });
            panorama.setVisible(true);
        }
    }
  render() {
    return (
        <div className="gx-main-content-container gx-mt-30" style={{paddingTop:60}}>
            <Row style={{justifyContent: "center"}}>
                <Col  xxl={16} xl={20} lg={24} md={24} sm={24} xs={24}>
                    <Row>
                        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24} style={{paddingLeft:33}}>
                            <div>
                                <h3 style={{paddingBottom:10}}>
                                    Search customer
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
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
                                            <SimpleMapExampleGoogleMap 
                                                loadingElement={<div style={{height: `100%`}}/>}
                                                containerElement={<div style={{height: `190px`}}/>}
                                                mapElement={<div style={{height: `100%`}}/>}
                                                />
                                        </div>
                                        <div class="gx-addjob-customer-widget" style={{padding:10}}>
                                            <div class="gx-addjob-customer-widget-item">
                                                <span class="gx-addjob-customer-widget-text" style={{fontWeight:700}}>Peter Goldberg</span>
                                                <i class="material-icons gx-addjob-customer-widget-icon">account_circle</i>
                                            </div>
                                            <div class="gx-addjob-customer-widget-item">
                                                <span class="gx-addjob-customer-widget-text">701 S Harrison Ave <br/> Kankakee, IL 60901</span>
                                                <i class="material-icons gx-addjob-customer-widget-icon">room</i>
                                            </div>
                                            <div class="gx-addjob-customer-widget-item">
                                                <span class="gx-addjob-customer-widget-text">(688)-829-0483</span>
                                                <i class="material-icons gx-addjob-customer-widget-icon">local_phone</i>
                                            </div>
                                            <div class="gx-addjob-customer-widget-item">
                                                <span class="gx-addjob-customer-widget-text">perterjackson@website.com</span>
                                                <i class="material-icons gx-addjob-customer-widget-icon">email</i>
                                            </div>
                                        </div>
                                        <div style={{height:50,width:"100%",borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTop:"#e5e5e5 1px solid",backgroundColor:"#f7f6f6",padding:5, alignItems:"center", display: "flex"}}>
                                            <i class="material-icons gx-addjob-customer-widget-icon" style={{color:"#b5b5b5",paddingLeft:8,fontSize:19, marginRight:8}}>contacts</i>
                                            <span class="gx-addjob-customer-widget-text" style={{color:"#b5b5b5"}}>Customer jobs history</span>
                                            <i class="material-icons gx-addjob-customer-widget-icon" style={{color:"#b5b5b5",float:"right", marginLeft:"auto", fontSize:19, marginRight:15}}>keyboard_arrow_right</i>
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
                        {/* <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}  style={{paddingTop:10}}>
                            <UploadFileWidget style={{padding:0}}/>
                        </Col> */}
                    </Row>
                </Col>
            </Row>
        </div>
    );
  }
};

  
export default injectIntl(Step1_2);
