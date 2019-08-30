import React from "react";

import {Dropdown, Icon, Menu, List, Divider} from "antd";
import Widget from "components/Widget/index";
import TwoProgress from "components/Progress/TwoProgress";
import IntlMessages from "util/IntlMessages";

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
  
const InvoiceCard = () => {
  return (
    <Widget title={ <h4 className="gx-text-capitalize gx-mb-0"><IntlMessages id="dashboard.invoices"/></h4> }  styleName="gx-dashboard-card"
            extra={<Dropdown overlay={menu} trigger={['click']}>
              <span className="gx-text-grey gx-fs-sm">
                  365 days <Icon type="down"/>
              </span>
          </Dropdown>}>

        <div className="gx-dashboard-card-hover">
          <div className="gx-mt-2 gx-mb-3 gx-font-weight-semi-bold">
            $ {'00.00'} Unpaid
          </div>
          <div className="ant-row-flex gx-w-100 gx-justify-content-between gx-align-items-center gx-mt-1 gx-mb-1">
            <div className="">
              <div className="gx-fs-xl gx-font-weight-medium gx-hover-yellow">$ {'00.00'}</div>
              <div className="gx-text-grey gx-fs-sm">Not due yet</div>
            </div>
            <div>
              <div className="gx-text-right gx-fs-xl gx-font-weight-medium gx-hover-red">$ {'00.00'}</div>
              <div className="gx-text-grey gx-text-right gx-fs-sm">Overdue</div>
            </div>
          </div>
          <div className="gx-mt-1 gx-mb-2">
            <TwoProgress first="yellow" second="red" progress={50} />
          </div>
        </div>

        <div className="gx-pt-1 gx-pb-1">
          <Divider/>
        </div>

        <div className="gx-dashboard-card-hover">
          <div className="ant-row-flex gx-justify-content-between gx-align-items-center">
            <div className="gx-mt-1 gx-mb-2 gx-font-weight-semi-bold">
              $ {'00.00'} Paid
            </div>
            <Dropdown overlay={menu} trigger={['click']}>
              <span className="gx-text-grey gx-fs-sm">
                  30 days <Icon type="down"/>
              </span>
            </Dropdown>
          </div>
          <div className="ant-row-flex gx-w-100 gx-justify-content-between gx-align-items-center gx-mt-1 gx-mb-1">
            <div className="">
              <div className="gx-fs-xl gx-font-weight-medium gx-hover-cyan">$ {'00.00'}</div>
              <div className="gx-text-grey gx-fs-sm">Not deposited</div>
            </div>
            <div>
              <div className="gx-text-right gx-fs-xl gx-font-weight-medium gx-hover-green">$ {'00.00'}</div>
              <div className="gx-text-grey gx-text-right gx-fs-sm">Deposited</div>
            </div>
          </div>
          <div className="gx-mt-1 gx-mb-3">
            <TwoProgress first="cyan" second="green" progress={50} />
          </div>
        </div>
    </Widget>
  );
};

export default InvoiceCard;
