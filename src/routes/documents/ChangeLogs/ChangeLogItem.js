import React from "react";
import {Timeline} from "antd";

const ActivityItem = ({changeLog}) => {

  return (
    <Timeline.Item>
      <h4 className="gx-text-truncate">{changeLog.title}</h4>
      <p className="gx-fs-sm">{changeLog.date}</p>
      <ul>
        {changeLog.logs.map((log, index) => <li key={index} className="gx-fs-sm gx-text-grey">
          {log.type !== undefined ? <span
            className="gx-badge gx-mb-1 gx-text-white gx-badge-red">{log.type}</span> : null} {log.description}</li>)}
      </ul>

    </Timeline.Item>
  );
};

export default ActivityItem;
