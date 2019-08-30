import React from "react";
import AvatarIcon from "components/AvatarIcon";


const NotificationItem = ({notification}) => {
  const {type, desc, title, time, read} = notification;
  var avatarBack, icon;
  if( type == "credit" ) {
    avatarBack = 'yellow';
    icon = "credit_card";
  } else if( type == "warning" ) {
    avatarBack = 'red';
    icon = "warning";
  } else if( type == "star" ) {
    avatarBack = 'green';
    icon = "star";
  } else if( type == "update" ) {
    avatarBack = 'cyan';
    icon = "copyright";
  }

  var backColor = "";
  var descColor = "";
  if( !read ) {
    backColor = "gx-bg-white";
    avatarBack = "gx-bg-" + avatarBack;
  } else {
    avatarBack = "gx-hover-bg-" + avatarBack;
    descColor = "gx-text-grey";
  }

  return (
    <li className={"gx-activity-list gx-pointer " + backColor} >
      <AvatarIcon className={"gx-size-34 gx-mr-2 " + avatarBack } icon={icon}/>
      <div className="gx-activity-list-description">              
        <div className="gx-flex-row gx-flex-nowrap"> 
            <div className="gx-activity-list-name">{title}</div>
            <div className="gx-activity-list-datetime">
                {time}
            </div>
        </div>
        <div className={"gx-activity-list-desc " + descColor }>{desc}</div>
      </div>
    </li>
  );
};

export default NotificationItem;
