import React, {Component} from "react";
import {Link} from "react-router-dom";
import Widget from "components/Widget/index";
import { Button, Popover } from "antd";

const content = (
    <div style={{width: "100%", height: "100%"}}>
        <p className="gx-editContent gx-ss-fs-13 gx-ss-fw-500"><i className="material-icons  gx-text-center icon-content">edit</i>Edit employee</p>
        <p className="gx-editContent gx-ss-fs-13 gx-ss-fw-500"><i className="material-icons  gx-text-center icon-content ">cancel</i>Terminate</p>
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
                        <div className="gx-employee-card-avatar gx-flex-0 gx-main-avatar">{
                            this.props.job.avatar == "" ?
                            <span>{this.props.job.name.substr(0,1)}</span>
                            :
                            <img className="gx-employee-avatar" src={require("assets/images/avatar/"+this.props.job.avatar)}/>
                        }
                        </div>
                        <div className="gx-mr-3">
                            <div className="gx-employee-card-name">{this.props.job.name}</div>
                            <div className="gx-div-align-center gx-fs-md lh-26 gx-text-grey gx-ss-emloyee-card-position">{this.props.job.jobtitle}</div>
                            <div className="gx-mb-12 paddingTop gx-ss-employee-card-btn-group">
                                <Button className="gx-customized-button gx-mr-0"><i className="material-icons" style={{paddingTop: 6}}>message</i></Button>
                                <Link to="/main/dispatch/employeeprofile">
                                    <Button className="gx-customized-button gx-pr-20">View</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="right-icon-section">
                            <Popover content={content}  trigger="click" placement="bottomRight" arrowPointAtCenter overlayClassName="employee-popover" style={{padding:0}} onClick={this.clickMore}>
                                <div className="more-icon-section">
                                    <i className="material-icons gx-w-100 gx-text-center" style={{fontSize:27, color:"#a5abb5"}}>more_vert</i>
                                </div>
                            </Popover>
                        </div>
                    </div>
                    <div className="gx-employee-detail-container gx-px-20">
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-md gx-lh-18 gx-text-grey w-85 gx-ss-fs-12 gx-ss-fw-400">Email</div>
                            <div className="customer-name gx-fs-md gx-lh-18 gx-ss-fs-12 gx-ss-fw-500"><span>{this.props.job.email}</span></div>
                        </div>
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-md gx-lh-18 gx-text-grey w-85 gx-ss-fs-12 gx-ss-fw-400">Mobile</div>
                            <div className="customer-name gx-fs-md gx-lh-18 gx-ss-fs-12 gx-ss-fw-500"><span>{this.props.job.phone}</span></div>
                        </div>
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-md gx-lh-18 gx-text-grey w-85 gx-ss-fs-12 gx-ss-fw-400">Status</div>
                            <div className="customer-name gx-fs-md gx-lh-18 gx-ss-fs-12 gx-ss-fw-500">{
                                this.props.job.jobid == "" ?
                                "N/A"
                                :
                                <div><span>{this.props.job.status}</span><span className= "gx-text-primary" style={{cursor:"pointer"}}>{this.props.job.jobid}</span></div>
                            }</div>
                        </div>
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-md gx-lh-18 gx-text-grey w-85  gx-ss-fs-12 gx-ss-fw-400">Last Login</div>
                            <div className="customer-name gx-fs-md gx-lh-18  gx-ss-fs-12 gx-ss-fw-500" style={{display:"flex"}}>
                                {
                                    this.props.job.lastlogin == "Online" ?
                                    <span className="gx-text-green" style={{fontSize:28, fontWeight:600}}>•&nbsp;</span>
                                    :
                                    ""
                                }<span>{this.props.job.lastlogin}</span></div>
                        </div>
                    </div>
                <div className="gx-d-md-block" style={{height:50,marginTop: 11}}>
                    <div className="gx-dispatch-job-card-worker-panel" style={{height:50}}>
                        <div className="gx-dispatch-job-card-worker-panel-info w-100">
                            <div className="user-extra-Details">
                                <div className="gx-border-right gx-employee-card-bottom-button" >
                                    <div className="gx-div-align-center gx-fs-md lh-26 gx-text-grey app-version gx-ss-fs-12 gx-ss-fw-400">App Version:</div>
                                    {
                                        this.props.job.appversion == "Invited" ?
                                        <span className="gx-fs-md lh-26 gx-text-green  gx-ss-fs-12 gx-ss-fw-400">{this.props.job.appversion}</span>
                                        :
                                        <span className="gx-fs-md lh-26 gx-ss-fs-12 gx-ss-fw-400 gx-ss-vers">{this.props.job.appversion}</span>
                                    }
                                </div>
                                <div className="customer-details-section gx-extra-details">
                                    <div className="gx-fs-md  gx-ss-fs-12 gx-ss-fw-400 gx-pl-20">{
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
