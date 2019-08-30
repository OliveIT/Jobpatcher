import React from "react";
import { getJobDisplayInfo } from "util/JobStatus";
import IntlMessages from "util/IntlMessages";

const EmployeeListItem = ({avatar, name, status, children}) => {
    const jobDispInfo = getJobDisplayInfo(status);
    var bgColor = "gx-bg-" + jobDispInfo.color;

    return (
        <div className="gx-flex-row gx-flex-nowrap gx-align-items-center gx-mb-3">
            <img alt="avatar" src={avatar} className="gx-avatar-img gx-flex-0 gx-size-30 gx-border-0 gx-mr-2"/>
            <div className="gx-w-100">
                <div className="gx-div-align-center">
                    <div className="gx-dashboard-overall-overview-jobslist-item-name">{ name }</div>
                    <div className={ "gx-custom-tag " + bgColor}>
                        {jobDispInfo.title && 
                            <IntlMessages id={ jobDispInfo.title } />
                        }
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default EmployeeListItem;
