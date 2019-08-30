import React from "react";
import {Timeline} from "antd";

import Widget from "components/Widget";
import IntlMessages from "util/IntlMessages";
import {changeLogs} from "./data";
import ChangeLogItem from "./ChangeLogItem";

const ChangeLogs = () => {
  return (
    <Widget title={<IntlMessages id="sidebar.documents.changelog"/>}>
      <Timeline>
        {changeLogs.map((changeLog, index) => <ChangeLogItem key={index} changeLog={changeLog}/>)}
      </Timeline>
    </Widget>
  );
};

export default ChangeLogs;
