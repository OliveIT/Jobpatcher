import React from "react";

import Widget from "components/Widget/index";
import IntlMessages from "util/IntlMessages";
  
import {List} from "antd";

const data = [
  {
    icon: 'monetization_on',
    title: 'Earned',
    value: '$ 1050.00',
    tendancy: 1,
  },
  {
    icon: 'money',
    title: 'Collected',
    value: '$ 350.00',
    tendancy: 0,
  },
  {
    icon: 'event',
    title: 'Jobs scheduled',
    value: '07',
    tendancy: 1,
  },
  {
    icon: 'check_box',
    title: 'Jobs completed',
    value: '05',
    tendancy: 1,
  },
  {
    icon: 'build',
    title: 'New jobs booked',
    value: '04',
    tendancy: 1,
  },
];

const TodayStatCard = () => {
  return (
    <Widget title={ <h4 className="gx-text-capitalize gx-mb-0"><IntlMessages id="dashboard.todaystat"/></h4> }  styleName="gx-dashboard-card">
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <div className="gx-dashboard-card-list" style={{marginTop: '3.5px', marginBottom: '3.5px'}}>
              <div className="gx-div-align-center">
                  <i className="icon material-icons gx-mr-2">{item.icon}</i>
                  <span className="text gx-fs-md">{item.title}</span>
              </div>
              <div className="ant-row-flex gx-align-items-center">
                <div className="value gx-fs-md gx-font-weight-medium">
                  {item.value}
                </div>
                {item.tendancy === 1 ? <i className="material-icons gx-ml-1 gx-text-success">trending_up</i> : <i className="material-icons gx-ml-1 gx-text-danger">trending_down</i> }
              </div>              
            </div>
          </List.Item>
        )}
      />
    </Widget>
  );
};

export default TodayStatCard;
