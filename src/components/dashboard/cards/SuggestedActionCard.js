import React from "react";
import {Col, Row, Avatar} from "antd";

import Widget from "components/Widget/index";
import IntlMessages from "util/IntlMessages";

const Item = ({title, subTitle, color}) => {
    return (
        <div className="gx-small-card-shadow">
            <div className="gx-media" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <div className="gx-text-center gx-w-100">
                    <Avatar className="gx-fs-xl-nl gx-font-weight-semi-bold" style={{ backgroundColor: color, verticalAlign: 'middle', marginBottom: '12px' }} size="large">
                        {title}
                    </Avatar>
                    <div className="gx-text-grey gx-fs-sm gx-font-weight-medium">{subTitle}</div>
                </div>
            </div>
        </div>
    );
};

const SuggestedActionCard = () => {
  return (
    <Widget styleName="gx-card-full gx-card-shadow gx-dashboard-card" title={ <h4 className="gx-text-capitalize gx-mb-0" style={{height:'40px'}}><IntlMessages id="dashboard.suggestedaction"/></h4> }>
        <div className="gx-d-flex">
            <div className="gx-w-100">
                <Item className="gx-w-50" color="#b0e5bc" title="02" subTitle="Time off request"/>
                <Item color="#fbbbbb" title="05" subTitle="Invoice overdue"/>
            </div>
            <div className="gx-w-100">
                <Item color="#f7dc97" title="04" subTitle="Unscheduled job"/>
                <Item color="#9ce5e8" title="00" subTitle="Schedule missed"/>            
            </div>
        </div>
    </Widget>
  );
};

export default SuggestedActionCard;
