import React from "react";

import IntlMessages from "util/IntlMessages";
import {changeTimeFormat} from "util/DateTime";
import JobListItem from "components/List/JobListItem";

const data = [
    {
        avatar: 'person',
        name: 'Mark Ronaldo',
        job: 'Deep house cleaning',
        status: 'scheduled',
        datetime: '05/04/2019 14:30',
    },
    {
        avatar: 'business',
        name: 'John Kelvine',
        job: 'Windows cleaning',
        status: 'on the way',
        datetime: '05/04/2019 18:30',
    },
    {
        avatar: 'person',
        name: 'Tom Hamdon',
        job: 'Carpet cleaning',
        status: 'progress',
        datetime: '05/04/2019 12:30',
    },
    {
        avatar: 'person',
        name: 'Tom Hamdon',
        job: 'Deep house cleaning',
        status: 'scheduled',
        datetime: '05/04/2019 17:30',
    },
    {
        avatar: 'person',
        name: 'Robert Brannon',
        job: 'Deep house cleaning',
        status: 'scheduled',
        datetime: '05/04/2019 5:30',
    },
]

const OverviewJobList = () => {
    return (
        <div className="gx-dashboard-overall-overview-jobslist-panel">
            <div className="gx-fs-md gx-font-weight-medium gx-text-header gx-pl-20 gx-mb-3">
                <IntlMessages id="dashboard.overall.jobsoftoday" values={{value: data.length}} />
            </div>
            
            <div className="gx-dashboard-overall-overview-jobslist-scroll" >
                <div className="gx-dashboard-overall-overview-jobslist-wrapper" >
                { data.map( (item, index) => (
                    <JobListItem avatar={item.avatar} name={item.name} status={item.status} >
                        <div className="gx-div-align-center gx-justify-content-between">
                            <div className="gx-fs-11 gx-text-grey">{item.job}</div>
                            <div className="gx-fs-11 gx-text-grey">{changeTimeFormat(item.datetime)}</div>
                        </div>
                    </JobListItem>
                ))}
                </div>
            </div>
        </div>
    )
}

export default OverviewJobList;