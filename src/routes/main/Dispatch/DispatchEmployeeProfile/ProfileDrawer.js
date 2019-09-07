import React, {Component} from "react";
import {Tabs } from "antd";

import Auxiliary from "util/Auxiliary";
import ToolTab from "./ToolTab";
import EmployeeActivityTab from "components/ToolTab/EmployeeActivityTab";

const TabPane = Tabs.TabPane;

class ProfileDrawer extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
        <Auxiliary>
            <ToolTab />
            <EmployeeActivityTab className="gx-customer-activities-tab" title="EMPLOYEE ACTIVITIES"/>
        </Auxiliary>
    );
  }
};

export default ProfileDrawer;
