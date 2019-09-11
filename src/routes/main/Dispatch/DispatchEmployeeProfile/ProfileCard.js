import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag, Switch} from "antd";

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import {changeDateYearFormat} from "util/DateTime";
import Widget from "components/Widget";
import {Link} from "react-router-dom";
import {showAddress} from "util/Utils";


class ProfileCard extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }

  notAvailableWhenBlank ( item ) {
    if(item === '') {
        return (
            <div className="gx-text-grey"><IntlMessages id="customer.profile.notavailable"/></div>
        );
    }
    return item;    
  }

  renderAvatar( icon ) {
    return (
    <div className="gx-main-avatar gx-size-50 gx-mr-12">
        <i className="material-icons gx-w-100 gx-text-center" style={{color: '#fbfbfd', fontSize: '36px' }}>
            { icon }
        </i>                                            
        {/* <img className="gx-employee-avatar" src={require(icon)}/> */}
    </div>
    );
  }

  render() {
    var {data} = this.props;

    return (
        <Widget styleName="gx-card-full gx-ss-employee-profile-profile-container">
            <div className="gx-customer-profile-container">
                <div className="gx-customer-profile-card">
                    <div className="gx-flex-row gx-flex-nowrap">
                        <div className="gx-d-none gx-d-xl-block gx-mr-20  gx-ss-avatar">
                            { this.renderAvatar( data.avatar ) }
                        </div>
                        <div className="gx-ss-info1">    
                            <div  className="gx-flex-row gx-flex-nowrap gx-ss-info1-name-position">
                                <div className="gx-d-xl-none gx-mr-20">
                                    { this.renderAvatar( data.avatar ) }
                                </div>
                                <div className="gx-customer-profile-card-title">
                                    <div className="gx-ss-fs-14 gx-ss-fw-500 gx-ss-name">{data.name}</div>
                                    <div className="gx-customer-profile-card-subtitle gx-ss-fs-12 gx-ss-fw-500 gx-ss-position">{data.info1}</div>
                                </div>
                            </div>                        
                            
                            <table className="gx-customer-profile-card-table gx-ss-info1-others">
                                <tbody>
                                    <tr>
                                        {/* <td><IntlMessages id="customer.profile.totaljobs"/></td>
                                        <td>
                                            <IntlMessages id="customer.profile.totaljobs.value" values={{ value: 2 }} />
                                        </td> */}
                                        <td>Joined</td>
                                        <td>{data.joined}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>{data.statu}<a>{data.statusJob}</a></td>
                                    </tr>
                                    <tr>
                                        <td>Last job</td>
                                        <td><a>{data.lastJob}</a>{data.lastJobTime}</td>
                                    </tr>
                                    <tr>
                                        <td>Last login</td>
                                        <td style={{display:"flex"}}>
                                            <span className="gx-text-green" style={{fontSize:27, fontWeight:700}}>•&nbsp;</span>
                                            {data.lastLogin}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>App version</td>
                                        <td>{data.appVersion}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>  
                    </div>                              
                </div>
                <div className="gx-customer-profile-card">
                    <div className="gx-customer-profile-card-title">
                        <div><IntlMessages id="customer.profile.contact"/></div>
                    </div>
                    <table className="gx-customer-profile-card-table">
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td style={{color: "#257bde"}}>{data.email}</td>
                            </tr>
                            <tr>
                                <td>Mobile</td>
                                <td>{data.phone.mobile}</td>
                            </tr>                             
                        </tbody>
                    </table>
                    <div className="gx-customer-profile-card-title gx-pt-10">
                        <div>Address</div>
                    </div>
                    <table className="gx-customer-profile-card-table">
                        <tbody>
                            <tr>
                                <td>Home</td>
                                <td>
                                    <div>{data.address.home.street}</div>
                                    <div>{data.address.home.city} {data.address.home.statecode} {data.address.home.zipcode}</div>
                                </td>
                            </tr>                   
                        </tbody>
                    </table>
                </div>
                <div className="gx-customer-profile-card">
                    <div className="gx-customer-profile-card-title">
                        <div>GPS tracking</div>
                    </div>
                    <table className="gx-customer-profile-card-table">
                        <tbody>
                            <tr style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
                                <Switch defaultChecked />
                                <div className="gx-ml-10" style={{fontWeight: "500"}}>Enabled</div>
                            </tr>
                            <tr className="gx-pt-10" style={{color:"#9399a2"}}>
                                <div>When login on mobile app</div>
                            </tr>                     
                        </tbody>
                    </table>
                </div>
            </div>
        </Widget>
    );
  }
};

export default ProfileCard;
