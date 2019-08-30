import React from "react";
import {changeDateFormat} from "util/DateTime";


function ActivityListItem({styleName, avatar, name, datetime, children}) {
  return (
    <div className="gx-activity-list">
      <img alt="avatar" src={avatar} className="gx-avatar-img gx-size-30 gx-border-0 gx-mr-10"/>
      <div className="gx-activity-list-description">              
        <div className="gx-flex-row"> 
            <div className="gx-activity-list-name">{name}</div>
            <div className="gx-activity-list-datetime">
                {changeDateFormat(datetime)}
            </div>
        </div>
        <div className="gx-activity-list-desc">{children}</div>
      </div>
    </div>

  );
}

export default ActivityListItem;
