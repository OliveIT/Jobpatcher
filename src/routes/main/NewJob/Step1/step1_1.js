import React, {Component} from "react";
import { Select} from "antd";
import {Col, Row} from "antd";
import { injectIntl } from 'react-intl';
import SearchBar from "components/AddJob/SearchBar";

import PrivateNoteWidget from "components/AddJob/PrivateNoteWidget";
import UploadFileWidget from "components/AddJob/UploadFileWidget";

class Step1_1 extends Component {

  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
        <div className="gx-main-content-container gx-mt-30" style={{paddingTop:150}}>
            <Row style={{justifyContent: "center"}}>
                <Col  xxl={12} xl={16} lg={24} md={24} sm={24} xs={24}>
                    <Row>
                        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                            <div>
                                <h3 style={{paddingBottom:10}}>
                                    Search customer
                                </h3>
                            </div>
                            <SearchBar />
                        </Col>

                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}  style={{paddingTop:10}}>
                            <PrivateNoteWidget style={{padding:0}}/>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}  style={{paddingTop:10}}>
                            <UploadFileWidget style={{padding:0}}/>
                        </Col>
                    </Row>
                </Col>     
            </Row>
        </div>
    );
  }
};

  
export default injectIntl(Step1_1);