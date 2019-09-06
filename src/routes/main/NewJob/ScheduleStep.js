import React, {Component} from "react";
import { injectIntl } from 'react-intl';
import {Button, Select, Avatar, Tag } from "antd";
import TopToolBar from "./Step3/TopToolBar";
import EmployeeWorkHours from "./Step3/employee-work-hours";

import {global_jobs} from "../Dispatch/data";

const Option = Select.Option;

class ScheduleStep extends Component {

  state = {
    duration: "week",
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
        <div className="gx-dispatch-module-content">    
            <TopToolBar 
                duration={duration} scheduled={scheduled}
                onChangeDuration={this.onChangeDuration.bind(this)}  
                onChangeScheduled={this.onChangeScheduled.bind(this)} 
            />
            <EmployeeWorkHours />
        </div>
    );
  }

  render() {
    return (
        <div className="gx-main-content gx-addjob-step3-schedule">
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
export default injectIntl(ScheduleStep);
