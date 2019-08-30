import React from "react";

import Widget from "components/Widget/index";
import TwoProgress from "components/Progress/TwoProgress";
  
import IntlMessages from "util/IntlMessages";
import {List} from "antd";

const data = [
    {
        icon: 'supervised_user_circle',
        title: 'Total customers',
        value: '375',
    },
    {
        icon: 'business',
        title: 'Commercial customers',
        value: '173',
    },
    {
        icon: 'home',
        title: 'Residential customers',
        value: '202',
    },
    {
        icon: 'check_box',
        title: 'Recurring customers',
        value: '48',
    },
];


const CustomerCard = () => {
  return (
    <Widget title={ <h4 className="gx-text-capitalize gx-mb-0"><IntlMessages id="dashboard.customers"/></h4> } styleName="gx-dashboard-card hover-progress">
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
        <div className="ant-row-flex gx-w-100 gx-justify-content-between gx-align-items-center">
            <div className="gx-text-italic gx-fs-md gx-font-weight-medium gx-hover-green">
                <span className="gx-font-weight-semi-bold" style={{fontSize:'18px', lineHeight: '24px'}}>{66}%</span> Residential
            </div>
            <div className="gx-text-italic gx-fs-md gx-font-weight-medium gx-hover-cyan">
                <span className="gx-font-weight-semi-bold" style={{fontSize:'18px', lineHeight: '24px'}}>{100 - 66}%</span> Commercial
            </div>                
        </div>
        <div className="gx-mb-3"  style={{ marginTop: '14px'}}>
          <TwoProgress first="green" second="cyan" progress={66} />
        </div>
      </div>
    </Widget>
  );
};

export default CustomerCard;
