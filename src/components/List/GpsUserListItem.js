import React from "react";

function GpsUserListItem({styleName, avatar, name, datetime, children,status}) {
  return (
    <div className="gx-gps-employee-list">
        <div className="gx-gps-employee-avatar">
            <img alt="avatar" src={avatar} className="gx-avatar-img gx-size-30 gx-border-0 gx-mr-10"/>
            {
                status === "login" ?
                <div className="circle-ss circle-green"></div>
                :
                <div className="circle-ss"></div>
            }
        </div>
        {
          status === "login" ?
          <div className="gx-gps-employee-name logedin-user">{name}</div>
          :
          <div className="gx-gps-employee-name">{name}</div>
        }
        
    </div>

  );
}

export default GpsUserListItem;
