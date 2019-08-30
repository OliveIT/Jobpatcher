import React from "react";
import { Badge } from "antd";
import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";

const PopupMore = ({notify, chat, sms}) => {
  return (
    <Auxiliary>
      <div className="gx-popover-no-padding" style={{minWidth: '185px'}}>
        <div className="gx-mt-3 gx-mb-3">
            <div className="gx-menuitem">
                <Badge count={notify}>
                  <i className="material-icons">notifications</i>
                </Badge>
                <span className="gx-ml-10">
                  <IntlMessages id="topmenu.more.notification" />
                </span>
            </div>
            <div className="gx-menuitem">
                <Badge count={chat}>
                  <i className="material-icons">chat</i>
                </Badge>
                <span className="gx-ml-10">
                  <IntlMessages id="topmenu.more.chat" />
                </span>
            </div>
            <div className="gx-menuitem">
                <Badge count={sms}>
                  <i className="material-icons">sms</i>
                </Badge>
                <span className="gx-ml-10">
                  <IntlMessages id="topmenu.more.sms" />
                </span>
            </div>
        </div>
      </div>
    </Auxiliary>
  )
};

export default PopupMore;

