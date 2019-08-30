import React from "react";
import NotificationItem from "./NotificationItem";
import {notifications} from "./data";
import CustomScrollbars from "util/CustomScrollbars";
import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";

const AppNotification = () => {
  return (
    <Auxiliary>
      <div className="gx-popover-no-padding">
        <div className="gx-popover-header">
          <h5 className="gx-mb-0">Notifications</h5>
          <i className="material-icons gx-text-grey gx-fs-xl gx-pointer">settings</i>
        </div>
        <div className="gx-popover-scroll">
          <ul className="gx-sub-popover gx-mb-0">
            {notifications.map((notification, index) => <NotificationItem key={index}
                                                                          notification={notification}/>)
            }
          </ul>
        </div>
        <div className="gx-popover-footer">
            <div className="gx-flex-row gx-flex-nowrap gx-align-items-center gx-fs-13-20 gx-font-weight-semi-bold gx-text-grey">
              <img src={require("assets/images/loading.png")} className="gx-mr-12" />
              <IntlMessages id="nav.loading" />
            </div>
        </div>
      </div>
    </Auxiliary>
  )
};

export default AppNotification;

