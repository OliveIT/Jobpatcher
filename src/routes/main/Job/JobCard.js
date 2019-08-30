import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag } from "antd";

import Auxiliary from "util/Auxiliary";
import {Link} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import Widget from "components/Widget";
import JobStatStep from "components/Steps/JobStatStep";


class JobCard extends Component {
    
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
        <Widget styleName="gx-card-full gx-mb-20">
            <div className="gx-job-customer-profile-container">
                <div className="gx-job-customer-profile-card gx-p-20">
                    <div className="gx-flex-row gx-flex-nowrap">
                        <div className="gx-d-none gx-d-xl-block gx-mr-2">
                            { this.renderAvatar( data.customer.avatar ) }
                        </div>
                        <div>
                            <div className="gx-mb-2">
                                <div className="gx-job-customer-profile-card-title">{data.customer.name}</div>
                                <div className="gx-fs-sm gx-text-grey">{data.customer.info1}</div>
                            </div>                 
                            
                            <table className="gx-job-customer-profile-card-table">
                                <tbody>
                                    <tr>
                                        <td><IntlMessages id="job.customercard.email"/></td>
                                        <td>{data.customer.email}</td>
                                    </tr>
                                    <tr>
                                        <td><IntlMessages id="job.customercard.mobile"/></td>
                                        <td>{data.customer.phone.mobile}</td>
                                    </tr>
                                    <tr>
                                        <td><IntlMessages id="job.customercard.home"/></td>
                                        <td>{data.customer.phone.home}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>  
                    </div>                              
                </div>

                <div className="gx-job-customer-status">
                    <JobStatStep times={data.datetimes} current={2} />
                </div>
            </div>
        </Widget>
    );
  }
};

export default JobCard;
