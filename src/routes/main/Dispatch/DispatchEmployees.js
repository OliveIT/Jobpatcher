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
import { global_jobs } from "./data";

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
        <div className="gx-d-none gx-d-md-block">
          <div className="gx-dispatch-top-toolbar">
            <div className="gx-div-align-center gx-mb-12">
              <SelectableButtonGroup
                className="gx-ml-10"
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
            </div>
            <div className="gx-div-align-center gx-mb-12">
              <div className="gx-d-none gx-d-sm-block">
                <SearchBox
                  styleName="gx-lt-icon-search-bar-lg gx-dispatch-search"
                  placeholder={formatMessage({
                    id: "dispatch.dispatch.search.placeholder"
                  })}
                  onChange={evt => this.updateSearchEmp(evt.target.value)}
                  value={this.state.searchText}
                />
              </div>
              <span className="gx-d-none gx-d-md-block gx-ml-10">
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
              <div className="gx-panel-content">
                <div className="gx-d-md-none gx-mt-20 gx-ml-20">
                  <div className="gx-div-align-center">
                    <span className="gx-fs-md gx-font-weight-medium gx-text-header gx-mr-3"> 1 / 10 Jobs </span>
                    <SearchBox
                    // styleName="gx-lt-icon-search-bar-lg gx-dispatch-search2"
                    //             placeholder={formatMessage({id:"dispatch.dispatch.search.placeholder"})}
                    //             onChange={this.updateSearchJobs.bind(this)}
                    //             value={this.state.searchText}
                    />
                  </div>
                </div>
                <div className="gx-panel-content-scroll">
                  <div className="gx-panel-content-scroll-container panel-section">
                    {['', '', '', '', ''].map((job, index) => (
                      <span>
                        {/* <DispatchJobCard key={index} job={job} /> */}
                        <EmployeeJobCard key={index} job={job} />
                      </span>
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
