import React from "react";
import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";

const PopupNew = () => {
  return (
    <Auxiliary>
      <div className="gx-popover-no-padding" style={{minWidth: '185px'}}>
        <div className="gx-mt-3 gx-mb-3">
            <div className="gx-menuitem">
                <i className="material-icons gx-mr-10">account_circle</i>
                <IntlMessages id="topmenu.new.customer" />
            </div>
            <div className="gx-menuitem">
                <i className="material-icons gx-mr-10">build</i>
                <IntlMessages id="topmenu.new.job" />
            </div>
            <div className="gx-menuitem">
                <i className="material-icons gx-mr-10">assignment_turned_in</i>
                <IntlMessages id="topmenu.new.estimate" />
            </div>
        </div>
      </div>
    </Auxiliary>
  )
};

export default PopupNew;

