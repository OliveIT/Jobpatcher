import React from "react";
import {Card, Icon, Steps} from "antd";

const Step = Steps.Step;

const WithIcon = () => {
  return (
    <Card className="gx-card" title="With Icon">
      <Steps>
        <Step status="finish" title="Login" icon={<Icon type="user"/>}/>
        <Step status="finish" title="Verification" icon={<Icon type="solution"/>}/>
        <Step status="process" title="Pay" icon={<Icon type="loading"/>}/>
        <Step status="wait" title="Done" icon={<Icon type="smile-o"/>}/>
      </Steps>
    </Card>
  );
};

export default WithIcon;
