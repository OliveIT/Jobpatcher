import React, {Component} from "react";
import {Button, Select, Avatar, Tag } from "antd";
import { injectIntl } from 'react-intl';

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import Widget from "components/Widget";
import SearchBox from "components/SearchBox";
import DispatchJobCard from "components/Dispatch/DispatchJobCard";
import TopMenu from "./TopMenu";
import JobListItem from "components/List/JobListItem";
import TopToolBar from "./TopToolBar";
import EmployeeWorkHours from "./employee-work-hours";
import EmployeeWorkmonth from "./employee-work-month";
import EmployeeWorkweek from "./employee-work-week";

import {global_jobs} from "./data";

const Option = Select.Option;

class DispatchSchedule extends Component {
    
  state = {
    duration: "day",
    scheduled: "scheduled",
    jobs: [],
    searchText: ""
  };

  constructor(props, context) {
    super(props, context);

    this.renderMainContent = this.renderMainContent.bind(this);
    this.changeJobs = this.changeJobs.bind(this);
  }

  componentDidMount() {
      this.changeJobs( this.state.scheduled );
  }

  changeJobs ( scheduled ) {
      if (scheduled === "scheduled") {
        this.setState( {
            jobs: this.getScheduledJobs(global_jobs)
        })
      } else {
        this.setState( {
            jobs: this.getUnscheduledJobs(global_jobs)
        })
      }
  }

  getScheduledJobs( data ) {
    return data.filter( job => job.status !== "unscheduled" )
  }
  
  getUnscheduledJobs( data ) {
    return data.filter( job => job.status === "unscheduled" )
  }

  onChangeDuration (duration) {
    this.setState({duration: duration});
    console.log(duration);
  }

  onChangeScheduled (scheduled) {
    this.setState({scheduled: scheduled});
    this.changeJobs( scheduled );
  }  
  
  updateSearchJobs = (evt) => {
    this.setState({
      searchText: evt.target.value
    });
  };
  
  renderMainContent() {
    const { jobs, scheduled, duration } = this.state;
    const {intl: {formatMessage}} = this.props;
    return (
      <div className="gx-ss-schedule-position-relative">
      <div className="gx-dispatch-module-content">    
          <TopToolBar duration={duration} scheduled={scheduled} 
                      onChangeDuration={this.onChangeDuration.bind(this)}
                      onChangeScheduled={this.onChangeScheduled.bind(this)} 
                      scheduledCount={3}
                      unscheduledCount={5} />
          {/* <EmployeeWorkHours/> */}
          {
            duration === "month" &&
            <EmployeeWorkmonth/>
            || duration === "week" &&
            <EmployeeWorkweek/>
            || <EmployeeWorkHours/>
          }
          {/* <Widget styleName="gx-card-full gx-dispatcher-job-panel">
              <div className="gx-panel-title-bar ">
                  <h5>
                      {scheduled === "scheduled" &&
                          <IntlMessages id="dispatch.dispatch.scheduledjobs" values={{value: this.state.jobs.length}} />
                      }
                      {scheduled !== "scheduled" &&
                          <IntlMessages id="dispatch.dispatch.unscheduledjobs" values={{value: this.state.jobs.length}} />
                      }
                  </h5>
                  <div className="gx-div-align-center">
                      <div className="gx-d-none gx-d-md-block">
                          <SearchBox styleName="gx-lt-icon-search-bar-lg gx-dispatch-search"
                                      placeholder={formatMessage({id:"dispatch.dispatch.search.placeholder"})}
                                      onChange={this.updateSearchJobs.bind(this)}
                                      value={this.state.searchText}/>     
                      </div>          
                  </div>
              </div>
              <div className="gx-panel-content">
                  <div className="gx-d-md-none gx-mt-20 gx-ml-20">
                      <div className="gx-div-align-center">
                          <span className="gx-fs-md gx-font-weight-medium gx-text-header gx-mr-3"> 1 / { this.state.jobs.length } Jobs </span>
                          <SearchBox styleName="gx-lt-icon-search-bar-lg gx-dispatch-search2"
                                      placeholder={formatMessage({id:"dispatch.dispatch.search.placeholder"})}
                                      onChange={this.updateSearchJobs.bind(this)}
                                      value={this.state.searchText}/>     
                      </div>
                  </div>
                  <div className="gx-panel-content-scroll">
                      <div className="gx-panel-content-scroll-container">
                          { jobs.map ( (job, index) => (
                              <DispatchJobCard key={index} job={job} />
                          ))}
                      </div>
                  </div>
              </div>
          </Widget> */}
      </div>
      {
        scheduled === "unscheduled" &&
        <div className="gx-ss-unscheduled-drawer">
            <div className="gx-customer-tab gx-dispatcher-unscheduled-tab" >
                <div className="gx-customer-tab-header gx-justify-content-between" >
                    <h5 className="gx-text-uppercase">
                        <IntlMessages id="dispatch.dispatch.unscheduledjobs" values={{value: jobs.length}} />
                    </h5>
                </div>
                <div className="gx-dispatcher-unscheduled-tab-scroll" >
                    <div className="gx-customer-tab-content">
                        {jobs.map((item, index) => (
                            <JobListItem key={index} avatar={item.customer.avatar} name={item.customer.name} status={item.status} >
                                <div className="gx-fs-11 gx-text-grey">{item.job}</div>
                            </JobListItem>
                        ))}
                    </div>
                </div >
            </div> 
        </div>
      }
      </div>
    );
  }

  render() {
    return (
        <div className="gx-main-content">
            <TopMenu currentPage="1" />
            <div className="gx-app-module gx-dispatch-module"> 
                <div className="gx-w-100">
                    <div className="gx-dispatch-module-scroll">
                        { this.renderMainContent() }
                    </div>
                </div>
            </div>            
        </div>
    );
  }
};

  
export default injectIntl(DispatchSchedule);
