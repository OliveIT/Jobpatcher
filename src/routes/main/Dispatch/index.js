import React, {Component} from "react";
import {Button, Select, Avatar, Tag } from "antd";
import { injectIntl } from 'react-intl';

import ButtonGroup from "antd/lib/button/button-group";
import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import Widget from "components/Widget";
import SearchBox from "components/SearchBox";
import DispatchJobCard from "components/Dispatch/DispatchJobCard";
import TopMenu from "./TopMenu";
import DispatchDrawer from "./DispatchDrawer";
import TopToolBar from "./TopToolBar";
import {global_jobs} from "./data";

const Option = Select.Option;

const filter_types = [
    {
        key: "",
        title: "dispatch.dispatch.filter.allscheduled"
    },
    {
        key: "on the way",
        title: "job.type.ontheway"
    },
    {
        key: "progress",
        title: "job.type.progress"
    },
    {
        key: "finished",
        title: "job.type.finished"
    },
    {
        key: "invoice",
        title: "job.type.invoice"
    },
    {
        key: "payment",
        title: "job.type.payment"
    },
];


class Dispatch extends Component {
    
  state = {
    duration: "day",
    scheduled: "scheduled",
    jobs: [],
    searchText: "",
    filter: "",
    currentJobCardIndex: 0,
  };

  constructor(props, context) {
    super(props, context);

    this.renderMainContent = this.renderMainContent.bind(this);
    this.changeJobs = this.changeJobs.bind(this);
  }

  componentDidMount() {
      this.changeJobs( this.state.scheduled );
  }

  changeJobs ( scheduled ) {
      if (scheduled === "scheduled") {
        this.setState( {
            jobs: this.getScheduledJobs(global_jobs)
        })
      } else {
        this.setState( {
            jobs: this.getUnscheduledJobs(global_jobs)
        })
      }
  }

  getScheduledJobs( data ) {
    return data.filter( job => job.status !== "unscheduled" )
  }
  
  getUnscheduledJobs( data ) {
    return data.filter( job => job.status === "unscheduled" )
  }

  onChangeDuration (duration) {
    this.setState({duration: duration});
  }

  onChangeScheduled (scheduled) {
    this.setState({scheduled: scheduled});
    this.changeJobs( scheduled );
  }  

  onChangeFilterJob (value) {
    this.setState({filter: value});
  }
  
  updateSearchJobs = (evt) => {
    this.setState({
      searchText: evt.target.value
    });
  };

  onMoveCard = () => {
    
  }
  
  renderMainContent() {
    const { jobs, scheduled, duration, filter } = this.state;
    const {intl: {formatMessage}} = this.props;
    return (
    <div className="gx-dispatch-module-content">    
        <TopToolBar duration={duration} scheduled={scheduled} 
                    onChangeDuration={this.onChangeDuration.bind(this)}  
                    onChangeScheduled={this.onChangeScheduled.bind(this)} 
                    scheduledCount={3}
                    unscheduledCount={1} />

        <Widget styleName="gx-card-full gx-dispatcher-job-panel">
            <div className="gx-panel-title-bar ">
                <h5>
                    {scheduled === "scheduled" &&
                        <IntlMessages id="dispatch.dispatch.scheduledjobs" values={{value: this.state.jobs.length}} />
                    }
                    {scheduled !== "scheduled" &&
                        <IntlMessages id="dispatch.dispatch.unscheduledjobs" values={{value: this.state.jobs.length}} />
                    }
                </h5>
                <div className="gx-div-align-center">
                    <div className="gx-d-none gx-d-sm-block">
                        <SearchBox styleName="gx-lt-icon-search-bar-lg gx-dispatch-search"
                                    placeholder={formatMessage({id:"dispatch.dispatch.search.placeholder"})}
                                    onChange={this.updateSearchJobs.bind(this)}
                                    value={this.state.searchText}/>     
                    </div>
                    {scheduled === "scheduled" &&
                    <Select className="gx-dispatcher-job-filter gx-ml-10"
                            defaultValue=""
                            onChange={this.onChangeFilterJob.bind(this)}
                            suffixIcon={<i className="gx-combo-icon material-icons">expand_more</i>}>
                        { filter_types.map ( (type, index) => (
                            <Option key={index} value={type.key}>
                                {formatMessage({id: type.title})}
                            </Option>
                        ))}
                    </Select>   
                    }            
                </div>
            </div>
            <div className="gx-panel-content">
                <div className="gx-d-sm-none gx-mt-20 gx-ml-20">
                    <div className="gx-div-align-center">
                        <div className="gx-flex-0 gx-mr-2">
                            <ButtonGroup className="gx-customer-list-buttongroup">
                                <Button>
                                    <i className="material-icons">chevron_left</i>
                                </Button>
                                <Button>
                                    <span className="gx-text-normal"> { this.state.currentJobCardIndex + 1 } / { this.state.jobs.length } Jobs </span>
                                </Button>  
                                <Button>
                                    <i className="material-icons">chevron_right</i>
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div className="gx-w-100">
                            <SearchBox styleName="gx-lt-icon-search-bar-lg gx-dispatch-search2 gx-w-100"
                                    placeholder={formatMessage({id:"dispatch.dispatch.search.placeholder"})}
                                    onChange={this.updateSearchJobs.bind(this)}
                                    value={this.state.searchText}/>     
                        </div>
                    </div>
                </div>
                <div className="gx-panel-content-scroll">
                    <div className="gx-panel-content-scroll-container">
                        { jobs.filter(job => {
                            if( filter === "" ) {
                                return true;
                            }

                            if( job.status === filter )
                                return true;
                            return false;
                        }).map ( (job, index) => (
                            <DispatchJobCard key={index} job={job} />
                        ))}
                    </div>
                </div>
            </div>
        </Widget>
    </div>
    );
  }

  render() {
    return (
        <div className="gx-main-content">
            <TopMenu currentPage="0" />
            <div className="gx-app-module gx-dispatch-module"> 
                <div className="gx-w-100">
                    <div className="gx-dispatch-module-scroll">
                        { this.renderMainContent() }
                    </div>
                </div>

                <div className="gx-customer-sidenav">
                    <DispatchDrawer/> 
                </div>
            </div>            
        </div>
    );
  }
};

  
export default injectIntl(Dispatch);
