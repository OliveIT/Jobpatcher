import React from "react";
import {Card, Col, Row} from "antd";

import IntlMessages from "util/IntlMessages";
import ContainerHeader from "components/ContainerHeader/index";
import Basic from "./Basic/index";
import Classic from "./Classic/index";
import Circle from "./Circle/index";
import Dark from "./Dark/index";

const PricingTable = ({match}) => {
  return (
    <Row>
      <Col span={24}>
        <ContainerHeader title={<IntlMessages id="sidebar.extraElements.pricingTable"/>} match={match}/>
      </Col>

      <Col span={24}>
        <Card title={<IntlMessages id="pricingTable.basic"/>}>
          <Basic/>
        </Card>
      </Col>

      <Col span={24}>
        <Card title={<IntlMessages id="pricingTable.circle"/>}>
          <Circle/>
        </Card>
      </Col>

      <Col span={24}>
        <Card title={<IntlMessages id="pricingTable.classic"/>}>
          <Classic/>
        </Card>
      </Col>

      <Col span={24}>
        <Card title={<IntlMessages id="pricingTable.dark"/>}>
          <Dark/>
        </Card>
      </Col>
    </Row>
  );
};

export default PricingTable;

