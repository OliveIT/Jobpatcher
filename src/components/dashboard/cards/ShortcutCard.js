import React from "react";

import Widget from "components/Widget/index";
import IntlMessages from "util/IntlMessages";
  
import {List} from "antd";

const data = [
  {
    icon: 'link',
    title: 'Add a customer',
  },
  {
    icon: 'link',
    title: 'Create a job',
  },
  {
    icon: 'link',
    title: 'Scheduled a job',
  },
  {
    icon: 'link',
    title: 'Create an estimates',
  },
  {
    icon: 'link',
    title: 'Add expense record',
  },
  {
    icon: 'link',
    title: 'Checking billings details',
  },
];

const ShortcutCard = () => {
  return (
    <Widget title={ <h4 className="gx-text-capitalize gx-mb-0"><IntlMessages id="dashboard.shortcuts"/></h4> }  styleName="gx-dashboard-card">
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <div className="gx-dashboard-card-list" style={{marginTop: '-1px', marginBottom: '-1px' }}>
              <div className="gx-div-align-center">
                  <i className="icon material-icons gx-mr-2">{item.icon}</i>
                  <span className="text gx-fs-md">{item.title}</span>
              </div>
            </div>
          </List.Item>
        )}
      />
    </Widget>
  );
};

export default ShortcutCard;
