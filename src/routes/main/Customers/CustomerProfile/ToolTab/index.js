import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag, Tabs } from "antd";

import IntlMessages from "util/IntlMessages";
import Notes from "components/ToolTab/Notes";
import Files from "components/ToolTab/Files";
import Tags from "components/ToolTab/Tags";

const TabPane = Tabs.TabPane;

const StatItem = ({icon, title, subTitle, color}) => {
    return (
        <div className="gx-small-card-shadow">
            <div className="gx-media" style={{padding: '20px 15px'}}>
                <div className="gx-w-100 gx-flex-row gx-flex-nowrap gx-align-items-center">
                    <Avatar className={ "gx-size-36 gx-bg-light-" + color }>
                        <i className="gx-fs-xl gx-font-weight-medium material-icons" style={{verticalAlign: 'middle'}}>{icon}</i>
                    </Avatar>
                    <div className="gx-ml-2">
                        <div className="gx-fs-18 gx-font-weight-semi-bold">{title}</div>
                        <div className="gx-text-grey gx-fs-sm gx-font-weight-medium">{subTitle}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

class ToolTab extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
        <Tabs className="gx-tabs-sidebar" defaultActiveKey="1">
            <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><i className="material-icons gx-mr-2">assessment</i><IntlMessages id="customer.profile.tab.stats"/></span>} key="1">
                <div className="gx-d-flex" style={{padding: '10px 15px'}}>
                    <div className="gx-w-100">
                        <StatItem className="gx-w-50" icon="done" color="green" title="02" subTitle={<IntlMessages id="customer.profile.jobdone"/>}/>
                        <StatItem icon="attach_money" color="yellow" title="04" subTitle={<IntlMessages id="customer.profile.jobvalue"/>}/>
                    </div>
                    <div className="gx-w-100">
                        <StatItem icon="check" color="red" title="05" subTitle={<IntlMessages id="customer.profile.amountdue"/>}/>
                        <StatItem icon="sync" color="blue" title="00" subTitle={<IntlMessages id="customer.profile.averagejobs"/>}/>            
                    </div>
                </div>
            </TabPane>
            <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><i className="material-icons gx-mr-2">description</i><IntlMessages id="customer.profile.tab.notes"/></span>} key="2">
               <Notes />
            </TabPane>
            <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><i className="material-icons gx-mr-2">folder</i><IntlMessages id="customer.profile.tab.files"/></span>} key="3">
               <Files />
            </TabPane>
            <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><i className="material-icons gx-mr-2">label</i><IntlMessages id="customer.profile.tab.tags"/></span>} key="4">
               <Tags />
            </TabPane>
        </Tabs> 
    );
  }
};

export default ToolTab;
