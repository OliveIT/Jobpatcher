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
import Step1_1 from "./Step1/step1_1";
import PrivateNoteWidget from "components/AddJob/PrivateNoteWidget";
import UploadFileWidget from "components/AddJob/UploadFileWidget";
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
            <Step1_1></Step1_1>
        </div>
    );
  }
};

  
export default injectIntl(NewJob);
