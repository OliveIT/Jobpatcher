import React from "react";
import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker
} from "react-color";
import {Card, Col, Row} from "antd";

import Basic from "./basic/index";
import BasicToggle from "./basicToggle/index";
import BasicPositioning from "./basicPositioning/index";
import CustomPicker from "./customPicker/index";
import CustomPointer from "./customPointer/index";
import WithRedux from "./withRedux/index";
import IntlMessages from "util/IntlMessages";

const ColorPicker = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.alpha"/>}>
          <AlphaPicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.hue"/>}>
          <HuePicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.circle"/>}>
          <CirclePicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.compact"/>}>
          <CompactPicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.block"/>}>
          <BlockPicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.chrome"/>}>
          <ChromePicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.github"/>}>
          <GithubPicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.twitter"/>}>
          <TwitterPicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.withRedux"/>}>
          <WithRedux/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.sketch"/>}>
          <SketchPicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.material"/>}>
          <MaterialPicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.slider"/>}>
          <SliderPicker styles={{default: {wrap: {}}}}/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.basic"/>}>
          <Basic/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.basicToggle"/>}>
          <BasicToggle/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.custom"/>}>
          <CustomPicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card
          title={<IntlMessages id="picker.color.customPointer"/>}>
          <CustomPointer/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.swatches"/>}>
          <SwatchesPicker/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.alpha"/>}>
          <BasicPositioning/>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title={<IntlMessages id="picker.color.photoshop"/>}>
          <PhotoshopPicker/>
        </Card>
      </Col>
    </Row>
  )
};

export default ColorPicker;
