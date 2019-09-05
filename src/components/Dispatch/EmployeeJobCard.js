import React from "react";

import Widget from "components/Widget/index";
import { getJobDisplayInfo } from "util/JobStatus";
import IntlMessages from "util/IntlMessages";
import { Link } from "react-router-dom";
import { Button, Popover } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { changeDateTimeAtFormat } from "util/DateTime";
import EmployeeBox from "components/Dispatch/EmployeeBox";
import Auxiliary from "util/Auxiliary";

const content = (
    <div>
        <p className="gx-editContent"><i className="material-icons  gx-text-center gx-text-black icon-content">edit</i><div>Edit employee</div></p>
        <p className="gx-editContent"><i className="material-icons  gx-text-center gx-text-black icon-content ">cancel</i> <div>Cancel</div></p>
    </div>
);
const EmployeeJobCard = () => {
    return (
        <Widget styleName="gx-card-full gx-dispatch-job-card job-card-section" >
            <div className="gx-dispatch-job-card-customer-panel">
                <div className="gx-dispatch-job-card-customer-panel-info gx-justify-content-between">
                    <div>
                        <div className="gx-dispatch-job-card-customer-panel-info2">
                            <div className="gx-flex-row section-gx-flex ">
                                <div className="gx-flex-0 gx-main-avatar  gx-mr-2 card-icon">
                                    <i className="material-icons gx-w-100 gx-text-center gx-text-white">person</i>
                                </div>
                                <div className="gx-mr-3 gx-mb-12 customer-name-section">
                                    <div className="gx-dispatch-job-card-customer-name">John Deo</div>
                                    <div className="gx-div-align-center gx-fs-sm gx-text-grey">
                                        Info 1
                                        <span className="gx-round-4 gx-bg-grey gx-mx-1"></span>
                                        info 2
                                    </div>
                                    <div className="gx-mb-12 paddingTop">
                                        <Button className="gx-customized-button gx-customized-text-button gx-mr-0"><IntlMessages id="dispatch.dispatch.card.customerprofile" /></Button>
                                        <Button className="gx-customized-button gx-customized-text-button"><IntlMessages id="dispatch.dispatch.card.jobdetails" /></Button>
                                    </div>
                                </div>
                                <div className="right-icon-section">
                                    <Popover content={content}  trigger="click" placement="bottom">
                                        <div className="more-icon-section">
                                            <i className="material-icons gx-w-100 gx-text-center gx-text-black ">more_vert</i>
                                        </div>
                                    </Popover>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="customer-parent-section">
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-sm gx-text-grey w-75">Email</div>
                            <div className="customer-name"><span>robert@website.com</span></div>
                        </div>
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-sm gx-text-grey w-75">Mobile</div>
                            <div className="customer-name"><span>(306)-469-4576</span></div>
                        </div>
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-sm gx-text-grey w-75">Status</div>
                            <div className="customer-name"><span>N/A</span></div>
                        </div>
                        <div className="customer-details-section" >
                            <div className="gx-div-align-center gx-fs-sm gx-text-grey w-75">Last Login</div>
                            <div className="customer-name"><span className="">N/A</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gx-d-none gx-d-md-block">
                <div className="gx-dispatch-job-card-worker-panel">
                    <div className="gx-dispatch-job-card-worker-panel-info w-100">
                        <div className="user-extra-Details">
                            <div className="customer-details-section gx-border-right gx-extra-details" >
                                <div className="gx-div-align-center gx-fs-sm gx-text-grey app-version">App Version:</div>
                                <div className="customer-name text-fontSize"><span className="text-green">v 2.0.2</span></div>
                            </div>
                            <div className="customer-details-section gx-extra-details" >
                                <div className="customer-name"><span className="text-green">Active</span></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="gx-d-md-none">
                <div className="gx-dispatch-job-card-worker-panel">
                    <div className="gx-dispatch-job-card-worker-panel-info">
                        <div>
                            <i className="material-icons gx-mr-2 card-icon">event</i>
                        </div>
                        <div>
                            <i className="material-icons gx-mr-2">description</i>
                        </div>
                        <div>
                            <i className="material-icons gx-mr-2">folder</i>
                        </div>
                    </div>
                </div>
                    <div className="gx-dispatch-job-card-worker-panel2">
                        <div className="gx-dispatch-job-card-worker-panel-tools gx-d-none gx-d-sm-block">
                            <ButtonGroup className="gx-customer-list-buttongroup">
                                <Button><i className="material-icons">assignment_ind</i></Button>
                                <Button><i className="material-icons">restore</i></Button>
                                <Button><i className="material-icons">cancel</i></Button>
                            </ButtonGroup>
                        </div>
                        <div className="gx-d-sm-none">
                            <i className="material-icons gx-pointer gx-text-grey">more_vert</i>
                        </div>
                    </div>
            </div>
        </Widget>
    );
};

export default EmployeeJobCard;
