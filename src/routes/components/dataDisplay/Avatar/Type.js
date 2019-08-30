import React from "react";
import {Avatar, Card} from "antd";

const Type = () => {
  return (
    <Card className="gx-card" title="Type">
      <Avatar className="gx-mr-2" icon="user"/>
      <Avatar className="gx-mr-2">U</Avatar>
      <Avatar className="gx-mr-2">USER</Avatar>
      <Avatar className="gx-mr-2" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
      <Avatar className="gx-mr-2" style={{color: '#f56a00', backgroundColor: '#fde3cf'}}>U</Avatar>
      <Avatar className="gx-mr-2" style={{backgroundColor: '#87d068'}} icon="user"/>
    </Card>
  );
};

export default Type;
