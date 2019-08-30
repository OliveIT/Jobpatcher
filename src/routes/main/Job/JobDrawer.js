import React, {Component} from "react";
import {Tabs } from "antd";

import Auxiliary from "util/Auxiliary";
import ToolTab from "./ToolTab";
import ActivityTab from "components/ToolTab/ActivityTab";

const TabPane = Tabs.TabPane;

class JobDrawer extends Component {
    
  state = {
      currentTab: 1
  };

  constructor(props, context) {
    super(props, context);    
  }

  onChangeTab( tab ) {
    this.setState({currentTab: tab});
  }

  render() {
    const {currentTab} = this.state;
    var activityTabCls = "";

    if( currentTab == 1 ) {
      activityTabCls = "gx-job-activities-summary-tab";
    } else if( currentTab == 2 ) {
      activityTabCls = "gx-job-activities-todos-tab";
    } else if( currentTab == 3 ) {
      activityTabCls = "gx-job-activities-file-tab";
    }

    return (
        <Auxiliary>
            <ToolTab onChange={this.onChangeTab.bind(this)} />
            <ActivityTab className={activityTabCls} title="job.jobactivities" />
        </Auxiliary>
    );
  }
};

export default JobDrawer;
