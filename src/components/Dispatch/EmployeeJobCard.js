import React, {Component} from "react";

import Widget from "components/Widget/index";
import { Button, Popover } from "antd";
const content = (
    <div style={{width: "100%", height: "100%"}}>
        <p className="gx-editContent"><i className="material-icons  gx-text-center gx-text-black icon-content">edit</i>Edit employee</p>
        <p className="gx-editContent"><i className="material-icons  gx-text-center gx-text-black icon-content ">cancel</i>Cancel</p>
    </div>
);
class EmployeeJobCard extends Component {    

    constructor(props, context) {
        super(props, context);
    }

    render () {
        return (
            <Widget styleName="gx-employee-card gx-py-0">
                    <div className="gx-flex-row gx-px-20" style={{paddingTop:20}}>
                        <div className="gx-employee-card-avatar gx-flex-0 gx-main-avatar gx-mr-20">{
                            this.props.job.avatar == "" ?
                            <span>{this.props.job.name.substr(0,1)}</span>
                            :
                            <img className="gx-employee-avatar" src={require("assets/images/avatar/"+this.props.job.avatar)}/>
                        }
                        </div>
                        <div className="gx-mr-3 gx-mb-12">
                            <div className="gx-employee-card-name">{this.props.job.name}</div>
                            <div className="gx-div-align-center gx-fs-md lh-26 gx-text-grey">{this.props.job.jobtitle}</div>
                            <div className="gx-mb-12 paddingTop">
                                <Button className="gx-customized-button gx-mr-0" style={{width:60}}><i className="material-icons" style={{paddingTop: 6}}>message</i></Button>
                                <Button className="gx-customized-button gx-px-20" style={{width:90}}>View</Button>
                            </div>
                        </div>
                        <div className="right-icon-section">
                            <Popover content={content}  trigger="click" placement="bottom" style={{padding:0}} onClick={this.clickMore}>
                                <div className="more-icon-section">
                                    <i className="material-icons gx-w-100 gx-text-center" style={{fontSize:30, color:"#c5c5c5"}}>more_vert</i>
                                </div>
                            </Popover>
                        </div>
                    </div>
                    <div className="gx-employee-detail-container gx-px-20">
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-md lh-26 gx-text-grey w-85">Email</div>
                            <div className="customer-name gx-fs-md lh-26"><span>{this.props.job.email}</span></div>
                        </div>
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-md lh-26 gx-text-grey w-85">Mobile</div>
                            <div className="customer-name gx-fs-md lh-26"><span>{this.props.job.phone}</span></div>
                        </div>
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-md lh-26 gx-text-grey w-85">Status</div>
                            <div className="customer-name gx-fs-md lh-26">{
                                this.props.job.jobid == "" ?
                                "N/A"
                                :
                                <div><span>{this.props.job.status}</span><span className= "gx-text-primary" style={{cursor:"pointer"}}>{this.props.job.jobid}</span></div>
                            }</div>
                        </div>
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-md lh-26 gx-text-grey w-85">Last Login</div>
                            <div className="customer-name gx-fs-md lh-26" style={{display:"flex"}}>
                                {
                                    this.props.job.lastlogin == "Online" ?
                                    <span className="gx-text-green" style={{fontSize:35, fontWeight:700}}>•&nbsp;</span>
                                    :
                                    ""
                                }<span>{this.props.job.lastlogin}</span></div>
                        </div>
                    </div>
                <div className="gx-d-none gx-d-md-block" style={{height:62,marginTop: 10}}>
                    <div className="gx-dispatch-job-card-worker-panel" style={{height:62}}>
                        <div className="gx-dispatch-job-card-worker-panel-info w-100">
                            <div className="user-extra-Details">
                                <div className="gx-border-right gx-employee-card-bottom-button" >
                                    <div className="gx-div-align-center gx-fs-md lh-26 gx-text-grey app-version">App Version:</div>
                                    <span className="gx-fs-md lh-26 gx-text-green">{this.props.job.appversion}</span>
                                </div>
                                <div className="customer-details-section gx-extra-details" style={{paddingLeft:20}}>
                                    <div className="gx-fs-md">{
                                        this.props.job.appversion == "Invited" ?
                                        <span className="gx-text-primary" style={{fontWeight:700}}>Resend</span>
                                        :
                                        <span className="gx-text-green" style={{fontWeight:700}}>Active</span>
                                    }</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Widget>
        )
    }
};

export default EmployeeJobCard;
