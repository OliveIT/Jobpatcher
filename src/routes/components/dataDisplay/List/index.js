import React, {Component} from "react";
import {Col, Row} from "antd";

import SimpleList from "./SimpleList";
import BasicList from "./BasicList";
import Vertical from "./Vertical";


class List extends Component {

  render() {
    return (
      <Row>
        <Col span={24}>
          <SimpleList/>
        </Col>
        <Col span={24}>
          <BasicList/>
        </Col>
        <Col span={24}>
          <Vertical/>
        </Col>
      </Row>
    );
  }
}


export default (List);
