import React from "react";
import {Button, Card} from "antd";

const Icon = () => {
  return (<Card className="gx-card" title="Icon">
      <Button type="primary" shape="circle" icon="search"/>
      <Button type="primary" icon="search">Search</Button>
      <Button shape="circle" icon="search"/>
      <Button icon="search">Search</Button>
      <br/>
      <Button shape="circle" icon="search"/>
      <Button icon="search">Search</Button>
      <Button type="dashed" shape="circle" icon="search"/>
      <Button type="dashed" icon="search">Search</Button>
    </Card>
  );
};

export default Icon;
