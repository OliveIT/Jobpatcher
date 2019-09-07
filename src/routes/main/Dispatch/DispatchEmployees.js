import React, { Component } from "react";
import { Button, Select, Avatar, Tag, Tabs } from "antd";
import { injectIntl } from "react-intl";

import Auxiliary from "util/Auxiliary";
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

const Option = Select.Option;

class DispatchEmployees extends Component {
  state = {
    duration: "day",
    searchText: ""
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      employeeType: "active"
    };
  }

  componentDidMount() { }

  onChangeEmpType = employeeType => {
    this.setState({ employeeType });
  };

  updateSearchEmp = searchText => this.setState({ searchText });

  renderMainContent = () => {
    const {
      intl: { formatMessage }
    } = this.props;
    const { employeeType } = this.state;
    return (
      <div className="gx-dispatch-module-content">
        <div className="gx-d-md-block">


          <div className="gx-dispatch-top-toolbar">
            <div className="gx-div-align-center gx-mb-12">
              <SelectableButtonGroup
                className="gx-ml-10 gx-d-md-block gx-d-none"
                selected={employeeType}
                onChange={this.onChangeEmpType}
              >
                <Button key="active">
                  <IntlMessages id="dispatch.dispatch.employee.active" />
                </Button>
                <Button key="terminated">
                  <IntlMessages id="dispatch.dispatch.employee.terminated" />
                </Button>
              </SelectableButtonGroup>
              <Button className="gx-dispatch-employees-btn-filter gx-d-none gx-a-md-block">
                  <i className="material-icons">tune</i>
                  <div>Filter</div>
              </Button>
            </div>
            <div className="gx-div-align-center gx-mb-12">
              <div className="gx-d-sm-block">
                <SearchBox
                  styleName="gx-lt-icon-search-bar-lg gx-dispatch-search gx-employee-search-bar"
                  placeholder={'Search Employees'}
                  onChange={evt => this.updateSearchEmp(evt.target.value)}
                  value={this.state.searchText}
                />
              </div>
              <span className="gx-d-md-block gx-ml-10">
                <Button
                  className="gx-nav-btn gx-nav-dispatch-new-btn gx-mb-0"
                  type="primary"
                >
                  <div className="gx-div-align-center">
                    <i className="material-icons gx-fs-xl gx-mr-2">add</i>
                    <IntlMessages id="dispatch.dispatch.employe.addnewemp" />
                  </div>
                </Button>
              </span>
            </div>
          </div>


        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="gx-main-content">
        <TopMenu currentPage="2" />
        <div className="gx-app-module gx-dispatch-module">
          <div className="gx-w-100">
            <div className="gx-dispatch-module-scroll">
              {this.renderMainContent()}
              <div className="gx-panel-content gx-py-20" style={{backgroundColor:"transparent"}}>
                <div className="gx-panel-content-scroll">
                  <div className="gx-employee-content-panel">
                    {employee_data.map((emp, index) => (
                        <EmployeeJobCard key={index} job={emp} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default injectIntl(DispatchEmployees);
