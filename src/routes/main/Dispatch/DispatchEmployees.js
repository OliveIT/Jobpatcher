import React, { Component } from "react";
import { Button, Select, Modal, Tag, Tabs } from "antd";
import { injectIntl } from "react-intl";

import {connect} from "react-redux";
import IntlMessages from "util/IntlMessages";
import { Link } from "react-router-dom";
import Widget from "components/Widget";
import SearchBox from "components/SearchBox";
import DispatchJobCard from "components/Dispatch/DispatchJobCard";
import TopMenu from "./TopMenu";
import DispatchDrawer from "./DispatchDrawer";
import TopToolBar from "./TopToolBar";
import EmployeeWorkHours from "./employee-work-hours";
import SelectableButtonGroup from "components/Button/SelectableButtonGroup";
import EmployeeJobCard from 'components/Dispatch/EmployeeJobCard'
import { employee_data } from "./data";
import EditEmployeeDlg from "./EditEmployeeDlg";

const Option = Select.Option;

class DispatchEmployees extends Component {
  state = {
    duration: "day",
    searchText: ""
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      employeeType: "active",
      newEmpDlgShow: false
    };
  }

  componentDidMount() { }

  onChangeEmpType = employeeType => {
    this.setState({ employeeType });
  };

  addNewEmp() {
    this.setState({newEmpDlgShow: true});
  }

  onCancel() {
    this.setState({newEmpDlgShow: false});
  }

  updateSearchEmp = searchText => this.setState({ searchText });

  renderMainContent = () => {
    const {
      intl: { formatMessage }
    } = this.props;
    const { employeeType, newEmpDlgShow } = this.state;
    return (
      <div className="gx-dispatch-module-content gx-dispatch-employees-toolbar-ss">
        <div>

          {/* mobile reponsive... if width > sm-max then visible, else disappear */}
          <div className="gx-dispatch-top-toolbar gx-a-align-around-ss gx-d-md-flex gx-d-none">
            <div className="gx-div-align-center gx-mb-12">
              <SelectableButtonGroup
                className="gx-d-md-block gx-d-none"
                selected={employeeType}
                onChange={this.onChangeEmpType}
              >
                <Button key="active" style={{paddingRight:"18px",paddingLeft:"18px"}}>
                  <IntlMessages id="dispatch.dispatch.employee.active" />
                </Button>
                <Button key="terminated" style={{paddingRight:"22px",paddingLeft:"22px"}}>
                  <IntlMessages id="dispatch.dispatch.employee.terminated" />
                </Button>
              </SelectableButtonGroup>
              <Button className="gx-dispatch-employees-btn-filter gx-d-none gx-a-md-block">
                  <i className="material-icons">tune</i>
                  <div>Filter</div>
              </Button>
            </div>
            <div className="gx-div-align-center gx-mb-12">
              <div className="">
                <SearchBox
                  styleName="gx-lt-icon-search-bar-lg gx-dispatch-search gx-employee-search-bar"
                  placeholder={'Search Employees'}
                  onChange={evt => this.updateSearchEmp(evt.target.value)}
                  value={this.state.searchText}
                />
              </div>
              <span className="gx-ml-10">
                <Button
                  className="gx-nav-btn gx-nav-dispatch-new-btn gx-mb-0"
                  type="primary"
                  onClick={this.addNewEmp.bind(this)} style={{paddingLeft:"12px"}}>
                  <div className="gx-div-align-center gx-ss-fs-13 gx-ss-fw-500">
                    <i className="material-icons gx-fs-xl" style={{marginRight: "1px"}}>add</i>
                    <IntlMessages id="dispatch.dispatch.employe.addnewemp" />
                  </div>
                </Button>
              </span>
            </div>
          </div>
          {/* end responsive */}

          {/* mobile reponsive... if width < sm-max then visible, else disappear */}
          <div className="gx-dispatch-top-toolbar gx-a-align-around-ss gx-a-md-block gx-d-none gx-a-md-flex-column">
            <div className="gx-div-align-center gx-mb-12 gx-dispatch-employees-mobile-toolbar-btngroup">
              <Button className="gx-dispatch-employees-btn-filter gx-d-none gx-a-md-block">
                  <i className="material-icons">tune</i>
                  <div className="gx-px-10">Filter</div>
              </Button>
              <Button
                  className="gx-nav-btn gx-nav-dispatch-new-btn gx-mb-0"
                  type="primary"
                  onClick={this.addNewEmp.bind(this)}
                >
                  <div className="gx-div-align-center">
                    <i className="material-icons gx-fs-xl gx-mr-2">add</i>
                    <IntlMessages id="dispatch.dispatch.employe.addnewemp" />
                  </div>
                </Button>
            </div>
            <div className="gx-div-align-center gx-mb-12 gx-dispatch-employees-mobile-toolbar-search">
              <div className="">
                <SearchBox
                  styleName="gx-lt-icon-search-bar-lg gx-dispatch-search gx-employee-search-bar"
                  placeholder={'Search Employees'}
                  onChange={evt => this.updateSearchEmp(evt.target.value)}
                  value={this.state.searchText}
                />
              </div>
            </div>
          </div>
        {/* end responsive */}
        </div>
      </div>
    );
  };

  render() {
    const {width, intl: {formatMessage}} = this.props;
    return (
      <div className="gx-main-content">
        <TopMenu currentPage="2" />
        <div className="gx-app-module gx-dispatch-module">
          <div className="gx-w-100">
            <div className="gx-dispatch-module-scroll">
              {this.renderMainContent()}
              <div className="gx-panel-content gx-pt-0 gx-ss-dispatch-employees-a-pb-60" style={{backgroundColor:"transparent"}}>
                <div className="gx-panel-content-scroll">
                  <div className="gx-employee-content-panel gx-a-align-center-ss">
                    {employee_data.map((emp, index) => (
                        <EmployeeJobCard key={index} job={emp} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal className="gx-ss-dispatch-new-employee-modal"
            title={ 
                <div className="gx-flex-row gx-w-100 gx-justify-content-between gx-align-items-center" >
                    <div className="gx-customized-modal-title">Add new employee</div>
                    <div className="gx-flex-row gx-flex-nowrap gx-align-items-center">                                                            
                        <i className="material-icons gx-customized-modal-close" onClick={this.onCancel.bind(this)}>clear</i>
                    </div>
                </div>
            }
            closable={false}
            wrapClassName="gx-customized-modal vertical-center-modal"
            visible={this.state.newEmpDlgShow}
            onCancel={this.onCancel.bind(this)}
            width={ width >= 1144 ? 1084 : width - 60 }
        >
            <EditEmployeeDlg onCancel={this.onCancel.bind(this)}/>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({settings}) => {
  const {locale, navStyle, navCollapsed, width, currentPage} = settings;
  return {locale, navStyle, navCollapsed, width, currentPage}
};

export default connect(mapStateToProps) (injectIntl(DispatchEmployees));
