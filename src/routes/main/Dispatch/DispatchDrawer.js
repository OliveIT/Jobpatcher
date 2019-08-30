import React, {Component} from "react";
import Auxiliary from "util/Auxiliary";
import JobListItem from "components/List/JobListItem";
import ActivityTab from "components/ToolTab/ActivityTab";
import IntlMessages from "util/IntlMessages";

const unscheduled_jobs = [
    {
        avatar: 'person',
        name: 'Mark Ronaldo',
        job: 'Deep house cleaning',
        status: 'unscheduled',
        datetime: '05/04/2019 14:30',
    },
    {
        avatar: 'business',
        name: 'John Kelvine',
        job: 'Windows cleaning',
        status: 'unscheduled',
        datetime: '05/04/2019 18:30',
    },
    {
        avatar: 'person',
        name: 'Tom Hamdon',
        job: 'Carpet cleaning',
        status: 'unscheduled',
        datetime: '05/04/2019 12:30',
    },
    {
        avatar: 'person',
        name: 'Tom Hamdon',
        job: 'Deep house cleaning',
        status: 'unscheduled',
        datetime: '05/04/2019 17:30',
    },
    {
        avatar: 'person',
        name: 'Robert Brannon',
        job: 'Deep house cleaning',
        status: 'unscheduled',
        datetime: '05/04/2019 5:30',
    },
];

const UnscheduledTab = ( {jobs} ) => {    
    return (
        <div className="gx-customer-tab gx-dispatcher-unscheduled-tab" >
            <div className="gx-customer-tab-header gx-justify-content-between" >
                <h5 className="gx-text-uppercase">
                    <IntlMessages id="dispatch.dispatch.unscheduledjobs" values={{value: jobs.length}} />
                </h5>
                <span className="gx-div-align-center gx-link">
                    <div className="gx-fs-13-20 gx-font-weight-medium" ><IntlMessages id="viewall" /></div>
                    <i className="material-icons gx-fs-lg gx-ml-1">arrow_forward</i>
                </span>
            </div>
            <div className="gx-dispatcher-unscheduled-tab-scroll" >
                <div className="gx-customer-tab-content">
                    {jobs.map((item, index) => (
                        <JobListItem key={index} avatar={item.avatar} name={item.name} status={item.status} >
                            <div className="gx-fs-11 gx-text-grey">{item.job}</div>
                        </JobListItem>
                    ))}
                </div>
            </div >
        </div> 
    );
};


class DispatchDrawer extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
        <Auxiliary>
            <UnscheduledTab jobs={unscheduled_jobs} />
            <ActivityTab className="gx-dispatcher-activities-tab" title="dispatch.dispatch.dispatchactivities" />
        </Auxiliary>
    );
  }
};

export default DispatchDrawer;
