import React from "react";
import { getJobDisplayInfo } from "util/JobStatus";
import IntlMessages from "util/IntlMessages";

const JobListItem = ({avatar, name, status, children}) => {
    const jobDispInfo = getJobDisplayInfo(status);
    var bgColor = "gx-bg-" + jobDispInfo.color;

    return (
        <div className="gx-dashboard-overall-overview-jobslist-item">
            <div className="gx-flex-row gx-flex-nowrap gx-align-items-center">
                <div className="gx-flex-0 gx-main-avatar gx-size-30 gx-mr-2">
                    <i className="material-icons gx-w-100 gx-text-center">{avatar}</i>                                            
                </div>
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
        </div>
    )
}

export default JobListItem;
