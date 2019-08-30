import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tabs } from "antd";

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import Widget from "components/Widget";
import JobDetails from "./JobDetails";
import CustomerHistory from "./CustomerHistory";
import JobInvoice from "./JobInvoice";

const TabPane = Tabs.TabPane;

class JobPanel extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }
  
  render() {
    var {data} = this.props;

    return (
        <Widget styleName="gx-card-full gx-job-panel">
            <Tabs className="gx-job-panel-tab" defaultActiveKey="1" animated={false}
                  prevIcon={<i className="material-icons">close</i>}>
                <TabPane tab={<IntlMessages id="job.tab.jobdetails"/>} key="1">
                  <JobDetails data={data}/>
                </TabPane>
                <TabPane tab={<IntlMessages id="job.tab.jobinvoice"/>} key="2">
                  <JobInvoice data={data}/>
                </TabPane>
                <TabPane tab={<IntlMessages id="job.tab.customerhistory"/>} key="3">
                  <CustomerHistory/>
                </TabPane>
            </Tabs>
        </Widget>
    );
  }
};

export default JobPanel;
