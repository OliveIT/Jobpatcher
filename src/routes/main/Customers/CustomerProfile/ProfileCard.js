import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag } from "antd";

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
    </div>
    );
  }

  render() {
    var {data} = this.props;

    return (
        <Widget styleName="gx-card-full">
            <div className="gx-customer-profile-container">
                <div className="gx-customer-profile-card">
                    <div className="gx-flex-row gx-flex-nowrap">
                        <div className="gx-d-none gx-d-xl-block gx-mr-20">
                            { this.renderAvatar( data.avatar ) }
                        </div>
                        <div>    
                            <div  className="gx-flex-row gx-flex-nowrap">
                                <div className="gx-d-xl-none gx-mr-20">
                                    { this.renderAvatar( data.avatar ) }
                                </div>
                                <div className="gx-customer-profile-card-title">
                                    <div>{data.name}</div>
                                    <div className="gx-customer-profile-card-subtitle">{data.info1}</div>
                                </div>
                            </div>                        
                            
                            <table className="gx-customer-profile-card-table">
                                <tbody>
                                    <tr>
                                        <td><IntlMessages id="customer.profile.totaljobs"/></td>
                                        <td>
                                            <IntlMessages id="customer.profile.totaljobs.value" values={{ value: 2 }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><IntlMessages id="customer.profile.paid"/></td>
                                        <td>${data.paid}</td>
                                    </tr>
                                    <tr>
                                        <td><IntlMessages id="customer.profile.created"/></td>
                                        <td>{changeDateYearFormat(data.created)}</td>
                                    </tr>
                                    <tr>
                                        <td><IntlMessages id="customer.profile.lastjob"/></td>
                                        <td><Link to="/">{data.lastjob}</Link></td>
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
                                <td><IntlMessages id="customer.profile.email"/></td>
                                <td>{this.notAvailableWhenBlank(data.email)}</td>
                            </tr>
                            <tr>
                                <td><IntlMessages id="customer.profile.mobilephone"/></td>
                                <td>{this.notAvailableWhenBlank(data.phone.mobile)}</td>
                            </tr>
                            <tr>
                                <td><IntlMessages id="customer.profile.homephone"/></td>
                                <td>{this.notAvailableWhenBlank(data.phone.home)}</td>
                            </tr>
                            <tr>
                                <td><IntlMessages id="customer.profile.workphone"/></td>
                                <td>{this.notAvailableWhenBlank(data.phone.work)}</td>
                            </tr>                                            
                        </tbody>
                    </table>
                </div>
                <div className="gx-customer-profile-card">
                    <div className="gx-customer-profile-card-title">
                        <div><IntlMessages id="customer.profile.address"/></div>
                    </div>
                    <table className="gx-customer-profile-card-table">
                        <tbody>
                            <tr>
                                <td><IntlMessages id="customer.profile.addresshome"/></td>
                                <td>
                                    {showAddress(data.address.home)}                                    
                                </td>
                            </tr>
                            <tr>
                                <td><IntlMessages id="customer.profile.addressoffice"/></td>
                                <td>{this.notAvailableWhenBlank(data.address.office)}</td>
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
