import React, {Component} from "react";
import {Tabs } from "antd";

import Auxiliary from "util/Auxiliary";
import ToolTab from "./ToolTab";
import ActivityTab from "components/ToolTab/ActivityTab";

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
            <ActivityTab className="gx-customer-activities-tab" title="customer.profile.customeractivities"/>
        </Auxiliary>
    );
  }
};

export default ProfileDrawer;
