import React, {Component} from "react";
import { Button, Tabs } from "antd";

import Widget from "components/Widget";
import IntlMessages from "util/IntlMessages";
import Overview from "./Overall/Overview";
import Invoice from "./Overall/Invoice";
import Job from "./Overall/Job";

const TabPane = Tabs.TabPane;

class OverallCard extends Component {    

  constructor(props, context) {
    super(props, context);    
    
    this.state = {
    };
  }

  renderTabBar = (props, DefaultTabBar) => {
    const { company } = this.props;
    return (
    <div className="gx-dashboard-overall-tabs-header">
      <div className="gx-sub-title gx-pl-20" style={{lineHeight: "60px"}}>{company}</div>
      <div className="gx-dashboard-overall-tabs-wrapper">
        <DefaultTabBar {...props} />
      </div>
    </div>
      
    );
  }

  render() {    
    const { onChangeType, scroll } = this.props;
    const { type } = this.state;
    const unpaidInvoiceCount = 3;
    const unscheduledJobsCount = 5;
    return (        
        <Widget styleName="gx-card-full gx-dashboard-overall-card">
             <Tabs className="gx-dashboard-overall-tabs" defaultActiveKey="1" renderTabBar={this.renderTabBar.bind(this)}>
                <TabPane tab={<IntlMessages id="dashboard.overall.overview"/>} key="1">
                  <Overview />
                </TabPane>
                <TabPane tab={<span><IntlMessages id="dashboard.overall.unpaidinvoice"/><span className="gx-custom-rect-tag gx-bg-red">{unpaidInvoiceCount}</span></span>} key="2">
                  <Invoice />
                </TabPane>
                <TabPane tab={<span><IntlMessages id="dashboard.overall.unscheduledjobs"/><span className="gx-custom-rect-tag gx-bg-red">{unscheduledJobsCount}</span></span>} key="3">
                  <Job />
                </TabPane>
            </Tabs>
        </Widget>
    );
  }
};

export default OverallCard;
