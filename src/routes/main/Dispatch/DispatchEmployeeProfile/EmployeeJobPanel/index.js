import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tabs } from "antd";

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import Widget from "components/Widget";
import {Link} from "react-router-dom";
import JobHistory from "./JobHistory";

const TabPane = Tabs.TabPane;

class EmployeeJobPanel extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }
  
  render() {
    var {data} = this.props;

    return (
        <Widget styleName="gx-card-full gx-customer-job-panel  gx-dispatch-employee-profile">
            <Tabs className="gx-customer-job-panel-tab" defaultActiveKey="1" animated={false}
                  prevIcon={<i className="material-icons">close</i>}>
                <TabPane tab={<IntlMessages id="customer.job.tab.jobshistory"/>} key="1">
                    <JobHistory />
                </TabPane>
            </Tabs>
        </Widget>
    );
  }
};

export default EmployeeJobPanel;
