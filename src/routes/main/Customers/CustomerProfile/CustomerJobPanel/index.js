import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tabs } from "antd";

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import Widget from "components/Widget";
import {Link} from "react-router-dom";
import JobHistory from "./JobHistory";
import ScheduledJob from "./ScheduledJob";
import Invoices from "./Invoices";
import Estimates from "./Estimates";

const TabPane = Tabs.TabPane;

class CustomerJobPanel extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }
  
  render() {
    var {data} = this.props;

    return (
        <Widget styleName="gx-card-full gx-customer-job-panel">
            <Tabs className="gx-customer-job-panel-tab" defaultActiveKey="1" animated={false}
                  prevIcon={<i className="material-icons">close</i>}>
                <TabPane tab={<IntlMessages id="customer.job.tab.jobshistory"/>} key="1">
                    <JobHistory />
                </TabPane>
                <TabPane tab={<IntlMessages id="customer.job.tab.scheduledjobs"/>} key="2">
                    <ScheduledJob />
                </TabPane>
                <TabPane tab={<IntlMessages id="customer.job.tab.invoices"/>} key="3">
                    <Invoices />
                </TabPane>
                <TabPane tab={<IntlMessages id="customer.job.tab.estimates"/>} key="4">
                    <Estimates />
                </TabPane>
            </Tabs>
        </Widget>
    );
  }
};

export default CustomerJobPanel;
