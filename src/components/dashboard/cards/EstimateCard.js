import React from "react";

import Widget from "components/Widget/index";
import Progress from "components/Progress/Progress";
  
import IntlMessages from "util/IntlMessages";
import {List, Menu, Dropdown, Icon} from "antd";

const data = [
  {
    icon: 'event',
    title: 'Scheduled estimates',
    value: '367',
  },
  {
    icon: 'send',
    title: 'Awaiting sending',
    value: '13',
  },
  {
    icon: 'timelapse',
    title: 'Awaiting response',
    value: '24',
  },
  {
    icon: 'assignment_turned_in',
    title: 'Accepted estimates',
    value: '248',
  },
];

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider/>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const EstimateCard = () => {
  return (
    <Widget title={ <h4 className="gx-text-capitalize gx-mb-0"><IntlMessages id="dashboard.estimates"/></h4> }   styleName="gx-dashboard-card hover-progress"
            extra={<Dropdown overlay={menu} trigger={['click']}>
              <span className="gx-text-grey gx-fs-sm">
                  This week <Icon type="down"/>
              </span>
          </Dropdown>}>
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <div className="gx-dashboard-card-list">
              <div className="gx-div-align-center">
                  <i className="icon material-icons gx-mr-2">{item.icon}</i>
                  <span className="text gx-fs-md">{item.title}</span>
              </div>
              <div className="value gx-fs-md gx-font-weight-medium">
                {item.value}
              </div>
            </div>
          </List.Item>          
        )}
      />      
      <div>
        <div className="gx-text-italic gx-fs-md gx-font-weight-medium gx-hover-green">
          <span className="gx-font-weight-semi-bold" style={{fontSize:'18px', lineHeight: '24px'}}>{75}%</span> Acceptance rate
        </div>
        <div className="gx-mb-3" style={{ marginTop: '14px'}}>
          <Progress color="green" progress={75} />
        </div>
      </div>
    </Widget>
  );
};

export default EstimateCard;
