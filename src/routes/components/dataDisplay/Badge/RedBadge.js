import React from "react";
import {Badge, Card, Icon} from "antd";

const RedBadge = () => {
  return (
    <Card className="gx-card" title="Red Badge">
      <Badge dot>
        <Icon type="notification"/>
      </Badge>
      <Badge count={0} dot>
        <Icon type="notification"/>
      </Badge>
      <Badge dot>
        <a href="/">Link something</a>
      </Badge>
    </Card>
  );
};

export default RedBadge;
