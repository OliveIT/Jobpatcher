import React, {Component} from "react";
import {Button, Checkbox, Avatar } from "antd";
import {Col, Row} from "antd";
import {GoogleMap, OverlayView, StreetViewPanorama, withGoogleMap} from "react-google-maps";
import IntlMessages from "util/IntlMessages";
import {showAddress} from "util/Utils";
import {changeDateRangeWithTimeFormat, changeDateYearFormat} from "util/DateTime";
import Widget from "components/Widget";
import EmployeeListItem from "components/List/EmployeeListItem";

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


class JobDetails extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }

  renderAvatar( icon ) {
    return (
    <div className="gx-main-avatar gx-size-32">
        <i className="material-icons gx-w-100 gx-text-center" style={{color: '#fbfbfd'}}>
            { icon }
        </i>                                            
    </div>
    );
  }
  
  render() {
    var {data} = this.props;

    return (
        <div className="gx-pt-20">
            <div className="gx-job-jobdetail-card gx-mb-20">
                <Row>
                    <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Widget styleName="gx-card-full gx-widget-with-title gx-mb-0 gx-job-jobdetail-card-subcard">
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <div className="gx-shadow-box gx-p-20">
                                        <h5 className="gx-mb-3 gx-text-uppercase"> <IntlMessages id="job.jobdetails.job"/> </h5>
                                        <div className="gx-fs-sm gx-font-weight-medium gx-text-grey">
                                            <div className="gx-div-align-center gx-mb-2">
                                                <i className="material-icons gx-fs-xl gx-mr-2">watch_later</i>
                                                <span className="gx-fs-sm">
                                                    <IntlMessages id="job.jobdetails.job.created" values={{value: changeDateYearFormat(data.datetimes[0])}}/>
                                                </span>
                                            </div>
                                            <div className="gx-div-align-center gx-mb-2">
                                                <i className="material-icons gx-fs-xl gx-mr-2">event</i>
                                                <span className="gx-fs-sm">
                                                    { changeDateRangeWithTimeFormat(data.datetimes[0], data.datetimes[1]) }
                                                </span>
                                            </div>
                                            <div className="gx-div-align-center">
                                                <i className="material-icons gx-fs-xl gx-mr-2">repeat</i>
                                                <span className="gx-fs-sm">
                                                    <IntlMessages id="job.jobdetails.job.recurringjob"/>
                                                </span>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div className="gx-pb-20">
                                        <h5 className="gx-mb-3 gx-pt-20 gx-px-20"> <IntlMessages id="job.jobdetails.assignedemployees" values={{value: data.workers.length}}/> </h5>
                                        <div className="gx-job-jobdetail-card-employee-list gx-px-20">
                                            { data.workers.map( (worker, index) => (
                                                <EmployeeListItem key={index} avatar={worker.avatar} name={worker.name} status={worker.status} >
                                                    <div className="gx-fs-sm gx-text-grey">{worker.job_type}</div>
                                                </EmployeeListItem>                                                
                                            ))
                                            }
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <SimpleMapExampleGoogleMap
                                        loadingElement={<div style={{height: `100%`}}/>}
                                        containerElement={<div style={{height: `100%`, minHeight: 265}}/>}
                                        mapElement={<div style={{height: `100%`}}/>}
                                    />
                                </Col>
                            </Row>
                        </Widget>
                    </Col>
                    <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Widget styleName="gx-card-full gx-widget-with-title gx-mb-0 gx-job-jobdetail-card-subcard">
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <div className="gx-shadow-box gx-p-20">
                                        <h5 className="gx-mb-12 gx-text-uppercase"> <IntlMessages id="job.jobdetails.customer"/> </h5>
                                        <div className="gx-div-align-center" > 
                                            <div className="gx-d-none gx-d-xl-block gx-mr-2">
                                                { this.renderAvatar( data.customer.avatar ) }
                                            </div>
                                            <div>
                                                <div className="gx-job-customer-profile-card-title">{data.customer.name}</div>
                                                <div className="gx-fs-sm gx-text-grey">{data.customer.info1}</div>
                                            </div>                                             
                                        </div>
                                    </div>
                                    <div className="gx-p-20">
                                        <h5 className="gx-mb-12"> <IntlMessages id="job.jobdetails.contact" /> </h5>
                                        <table className="gx-job-customer-profile-card-table gx-mb-20">
                                            <tbody>
                                                <tr>
                                                    <td><IntlMessages id="job.customercard.email"/></td>
                                                    <td>{data.customer.email}</td>
                                                </tr>
                                                <tr>
                                                    <td><IntlMessages id="job.customercard.mobile"/></td>
                                                    <td>{data.customer.phone.mobile}</td>
                                                </tr>
                                            </tbody>
                                        </table>                                        

                                        <h5 className="gx-mb-12"> <IntlMessages id="job.jobdetails.joblocation" /> </h5>
                                        <table className="gx-job-customer-profile-card-table">
                                            <tbody>
                                                <tr>
                                                    <td><IntlMessages id="job.customercard.home"/></td>
                                                    <td>{ showAddress( data.customer.address.home )}</td>
                                                </tr>
                                            </tbody>
                                        </table>     
                                    </div>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <StreetViewPanoramaExampleGoogleMap
                                        loadingElement={<div style={{height: `100%`}}/>}
                                        containerElement={<div style={{height: `100%`, minHeight: 265}}/>}
                                        mapElement={<div style={{height: `100%`}}/>}
                                    />
                                </Col>
                            </Row>
                        </Widget>
                    </Col>
                </Row>
            </div>

            <Widget styleName="gx-card-full gx-p-20 gx-mb-20">
                <h5 className="gx-mb-12 gx-text-uppercase">
                    <IntlMessages id="job.jobdetails.jobdesc"/>
                </h5>
                <div className="gx-fs-sm gx-font-weight-medium">
                    <IntlMessages id="job.jobdetails.jobdesc.detail"/>            
                </div>
            </Widget>            
        </div>
    );
  }
};

export default JobDetails;
