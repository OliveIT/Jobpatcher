import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag, Tabs } from "antd";

import IntlMessages from "util/IntlMessages";
import Files from "components/ToolTab/Files";
import Todos from "components/ToolTab/Todos";
import Summary from "./Summary";


const TabPane = Tabs.TabPane;

class ToolTab extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }

  render() {
    const {onChange} = this.props;
    return (
        <Tabs className="gx-tabs-sidebar" defaultActiveKey="1" onChange={onChange}>            
            <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><i className="material-icons gx-mr-2">subject</i><IntlMessages id="job.sidebar.tab.summary"/></span>} key="1">
                <Summary />
            </TabPane>
            <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><i className="material-icons gx-mr-2">list</i><IntlMessages id="job.sidebar.tab.todos"/></span>} key="2">
                <Todos />
            </TabPane>
            <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><i className="material-icons gx-mr-2">folder</i><IntlMessages id="job.sidebar.tab.file"/></span>} key="3">
               <Files />
            </TabPane>
        </Tabs> 
    );
  }
};

export default ToolTab;
