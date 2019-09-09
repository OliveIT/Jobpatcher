import React, {Component} from "react";
import {Button, Select, Avatar, Tag} from "antd";
import {Col, Row} from "antd";
import {Steps, message} from "antd";
import Auxiliary from "util/Auxiliary";
import { injectIntl } from 'react-intl';
import SearchBar from "components/AddJob/SearchBar";
import ButtonGroup from "antd/lib/button/button-group";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import Widget from "components/Widget";
import Step1_1 from "./Step1/step1_1";
import Step1_2 from "./Step1/step1_2";
import AddJobItem from "./AddJobItem";
import {global_jobs} from "../Dispatch/data";
import ScheduleStep from "./ScheduleStep";
import {switchLanguage, updateWindowWidth, setCurrentPage} from "../../../appRedux/actions/Setting";
import {NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE, MOBILE_SIZE} from "../../../constants/ThemeSetting";
import {connect} from "react-redux";

const { Step } = Steps;

const steps = [
    {
        title: 'Choose customer',
        content: <Step1_1/>,
    },
    {
        title: 'Job items',
        content: <AddJobItem/>,
    },
    {
        title: 'Schedule',
        content: <ScheduleStep/>,
    },
];

class NewJob extends Component {

  constructor(props) {
    super(props);
    this.state = {
    current: 0,
    };
  } 

  next() {
    const current = this.state.current + 1;
    console.log(current);
    if(current === 3) {
        return;
    }
    this.setState({ current });
  }
  onChange = current => {
      console.log('onChange:', current);
      this.setState({ current });
  }

  componentDidMount() {
    this.props.updateWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      this.props.updateWindowWidth(window.innerWidth)
    });
  }


  render() {
    const {locale, width, navCollapsed, navStyle, pathname, currentPage, setCurrentPage, intl: {formatMessage}} = this.props;
    const { current } = this.state;
    const SCREEN_MD_MAX = 992;
    return (
        // <div className="gx-main-content-wrapper">
             <div>
                <div className="gx-dispatch-topmenu gx-addjob-topbar">
                    <h3 className="gx-addjob-top-title">Add new job</h3>
                    <div className="gx-addjob-steps">
                        <Steps current={current} onChange={this.onChange}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    </div>
                    {
                      width > SCREEN_MD_MAX &&
                        <div className="gx-addjob-top-btngroup">
                            <Button className="gx-nav-btn gx-nav-customer-btn gx-mb-0 gx-addjob-save-btn">Save without scheduling</Button>
                            <Button className="gx-nav-btn gx-nav-customer-btn gx-mb-0 gx-addjob-next-btn" onClick={() => this.next()}>
                                { this.state.current < 2 ?
                                  "Next"
                                  :
                                  "Save" 
                                }
                            </Button>
                        </div>
                    }
                </div>
                {
                  width <= SCREEN_MD_MAX && 
                    <div className="gx-addjob-top-btngroup-mobile">
                      <Button className="gx-nav-btn gx-nav-customer-btn gx-mb-0 gx-addjob-save-btn">Save without scheduling</Button>
                      <Button className="gx-nav-btn gx-nav-customer-btn gx-mb-0 gx-addjob-next-btn" onClick={() => this.next()}>
                              { this.state.current < 2 ?
                                  "Next"
                                  :
                                  "Save" 
                                }
                      </Button>
                    </div>
                }
                <Row>
                    <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                        <div className="steps-content" style={{height:"200px"}}>{steps[current].content}</div>
                    </Col>
                </Row>
         </div>
    );
  }
};

const mapStateToProps = ({settings}) => {
  const {locale, navStyle, navCollapsed, width, pathname, currentPage} = settings;
  return {locale, navStyle, navCollapsed, width, pathname, currentPage}
};

export default connect(mapStateToProps, {switchLanguage, setCurrentPage, updateWindowWidth})(injectIntl(NewJob));