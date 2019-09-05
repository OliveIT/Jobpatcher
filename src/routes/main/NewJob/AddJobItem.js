import React, {Component} from "react";
import {Col, Row, InputNumber, Input, Checkbox, Button} from "antd";
import { injectIntl } from 'react-intl';
import Widget from "components/Widget";
import PrivateNoteWidget from "components/AddJob/PrivateNoteWidget";
import UploadFileWidget from "components/AddJob/UploadFileWidget";
import JobSubPane from "components/AddJob/JobSubPane";

class AddJobItem extends Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
        <div className="gx-main-content-container gx-mt-30" style={{paddingTop:60}}>
            <Row style={{justifyContent: "center"}}>
                <Col  xxl={20} xl={20} lg={24} md={24} sm={24} xs={24}>
                    <Row>
                        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24} style={{paddingLeft:33}}>
                            <div style={{display: "flex", justifyContent:"space-between",alignItems:"center"}}>
                                <h3 style={{paddingBottom:10}}>
                                    Add job items
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                            <Row>
                                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                                    <Widget styleName="gx-card-full gx-dispatcher-job-panel gx-m-0">
                                        <div className="gx-addjob-step2-addjobitem-total-panel">
                                            <JobSubPane kind="Service"/>
                                            <JobSubPane kind="Material"/>
                                            {/* <Row>
                                                <Col xxl={1} xl={1} lg={1}>
                                                </Col>
                                                <Col xxl={9} xl={6} lg={6}>
                                                </Col>
                                                <Col xxl={2} xl={2} lg={2}>
                                                </Col>
                                                <Col xxl={2} xl={2} lg={2}>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={3} md={3} sm={3}>
                                                    <div>SubTotal</div>
                                                </Col>
                                                <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                    <div>$600.00</div>
                                                </Col>
                                                <Col xxl={1} xl={1} lg={1}>
                                                </Col>
                                            </Row> */}
                                        </div>
                                    </Widget>
                                </Col>
                            </Row>
                        </Col>

                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <Row>
                                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                                    <PrivateNoteWidget style={{padding:0}}/>
                                </Col>
                                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                                    <UploadFileWidget style={{padding:0}}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
  }
};
export default AddJobItem;
