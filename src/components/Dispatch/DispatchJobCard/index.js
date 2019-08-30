import React from "react";

import Widget from "components/Widget/index";
import { getJobDisplayInfo } from "util/JobStatus";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { changeDateTimeAtFormat } from "util/DateTime";
import EmployeeBox from "components/Dispatch/EmployeeBox";
import Auxiliary from "util/Auxiliary";

const DispatchJobCard = ({ job }) => {
    const jobDispInfo = getJobDisplayInfo(job.status);

    return (
        <Widget styleName="gx-card-full gx-dispatch-job-card" >   
            <div className={"gx-dispatch-job-card-bar " + jobDispInfo.color}></div>     
            <div className="gx-dispatch-job-card-customer-panel">
                <div className="gx-dispatch-job-card-customer-panel-info gx-justify-content-between">
                    <div>
                        <div className="gx-dispatch-job-card-customer-panel-info2">
                            <div className="gx-flex-row">
                                <div className="gx-flex-0 gx-main-avatar gx-size-32 gx-mr-2">
                                    <i className="material-icons gx-w-100 gx-text-center gx-text-white">{job.customer.avatar}</i>                                            
                                </div>
                                <div className="gx-mr-3 gx-mb-12">
                                    <div className="gx-dispatch-job-card-customer-name">{job.customer.name}</div>
                                    <div className="gx-div-align-center gx-fs-sm gx-text-grey">
                                        {job.customer.info1}
                                        <span className="gx-round-4 gx-bg-grey gx-mx-1"></span>
                                        {job.customer.info2}
                                    </div>
                                </div>
                            </div>
                            <div className="gx-mb-12">
                                <Button className="gx-customized-button gx-customized-text-button gx-mr-0"><IntlMessages id="dispatch.dispatch.card.customerprofile"/></Button>
                                <Button className="gx-customized-button gx-customized-text-button gx-ml-10"><IntlMessages id="dispatch.dispatch.card.jobdetails"/></Button>
                            </div>
                        </div>
                        <div className="gx-fs-md gx-font-weight-medium gx-text-header gx-mb-10">
                            <Link to="/main/dispatch/job">{job.job_id}</Link> - {job.job}
                        </div>
                    </div>
                    {job.status === "unscheduled" &&
                        <Button className="gx-mb-10" type="primary">
                            <IntlMessages id="dispatch.dispatch.card.schedulenow" />
                        </Button>
                    }
                    {job.status !== "unscheduled" &&
                        <div className={ "gx-dispatch-job-card-status gx-mb-10 " + jobDispInfo.color } >
                            <i className="material-icons gx-mr-10">{jobDispInfo.icon}</i>
                            <IntlMessages id={jobDispInfo.title} />
                        </div>
                    }
                </div>
            </div>
            <div className="gx-d-none gx-d-md-block">
                <div className="gx-dispatch-job-card-worker-panel">
                    <div className="gx-dispatch-job-card-worker-panel-info">
                        {job.status !== "unscheduled" &&
                            <div>
                                <EmployeeBox employees={job.workers} />
                            </div>
                        }
                        <div>
                            <i className="material-icons gx-mr-2">event</i>
                            { changeDateTimeAtFormat(job.datetime) }
                        </div>
                        <div>
                            <i className="material-icons gx-mr-2">description</i>
                            <IntlMessages id={job.notes > 1 ? "dispatch.dispatch.card.notes" : "dispatch.dispatch.card.note" } values={{value: job.notes}} />
                        </div>
                        <div>
                            <i className="material-icons gx-mr-2">folder</i>                        
                            <IntlMessages id={job.files > 1 ? "dispatch.dispatch.card.files" : "dispatch.dispatch.card.file" } values={{value: job.files}} />                        
                        </div>
                    </div>
                    {job.status !== "unscheduled" &&
                        <div className="gx-dispatch-job-card-worker-panel-tools">
                            <ButtonGroup className="gx-customer-list-buttongroup">
                                <Button><i className="material-icons">assignment_ind</i></Button>
                                <Button><i className="material-icons">restore</i></Button>
                                <Button><i className="material-icons">cancel</i></Button>
                            </ButtonGroup>
                        </div>
                    }
                </div>
            </div>
            <div className="gx-d-md-none">
                <div className="gx-dispatch-job-card-worker-panel">
                    <div className="gx-dispatch-job-card-worker-panel-info">
                        <div>
                            <i className="material-icons gx-mr-2">event</i>
                            { changeDateTimeAtFormat(job.datetime) }
                        </div>
                        <div>
                            <i className="material-icons gx-mr-2">description</i>
                            {job.notes}
                        </div>
                        <div>
                            <i className="material-icons gx-mr-2">folder</i>                        
                            {job.files}
                        </div>
                    </div>
                </div>
                {job.status !== "unscheduled" &&
                <div className="gx-dispatch-job-card-worker-panel2">
                    <div>
                        <EmployeeBox employees={job.workers} />
                    </div>
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
                }
            </div>
        </Widget>
    );
};

export default DispatchJobCard;
