import React from "react";
import {Card, Icon, Spin} from "antd";

const antIcon = <Icon type="loading" style={{fontSize: 24}} spin/>;

const Custom = () => {
  return (
    <Card title="Custom" className="gx-card">
      <Spin indicator={antIcon}/>
    </Card>
  );
};

export default Custom;
