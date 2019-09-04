import React, {Component} from "react";
import {Button, Select, Avatar, Tag, Steps, Step} from "antd";
import {Col, Row} from "antd";
import Auxiliary from "util/Auxiliary";
import { injectIntl } from 'react-intl';
import SearchBar from "components/AddJob/SearchBar";
import ButtonGroup from "antd/lib/button/button-group";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import Widget from "components/Widget";
import DispatchJobCard from "components/Dispatch/DispatchJobCard";
import DispatchDrawer from "../Dispatch/DispatchDrawer";
import TopToolBar from "../Dispatch/TopToolBar";
import TopMenu from "./TopMenu";
import PrivateNoteWidget from "./PrivateNoteWidget";
import UploadFileWidget from "./UploadFileWidget";
import {global_jobs} from "../Dispatch/data";

const Option = Select.Option;

class NewJob extends Component {

  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
        <div className="gx-main-content-wrapper">
            <TopMenu></TopMenu>
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
        </div>
    );
  }
};

  
export default injectIntl(NewJob);
