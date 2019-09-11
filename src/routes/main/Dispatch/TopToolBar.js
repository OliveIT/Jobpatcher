import React, {Component} from "react";
import {Button, Select, Avatar, Tag, Checkbox} from "antd";
import IntlMessages from "util/IntlMessages";
import SelectableButtonGroup from "components/Button/SelectableButtonGroup";
import ButtonGroup from "antd/lib/button/button-group";
import DateCalendar from "components/Calendar/DateCalendar";
import {Link} from "react-router-dom";


class TopToolBar extends Component {
    
    constructor(props, context) {
        super(props, context);
    }

    render () {   
        const { duration, scheduled, onChangeDuration, onChangeScheduled, scheduledCount, unscheduledCount , isAddJob} = this.props;
        // const { duration, scheduled, onChangeDuration, onChangeScheduled, scheduledCount, unscheduledCount } = this.props;
        return (  
            <div>
            {
                isAddJob === "YES" ?
                    <div className="gx-dispatch-top-toolbar" style={{paddingTop:"40px"}}>                
                        <div className="gx-div-align-center gx-mb-12">
                            <h3 style={{paddingRight:"20px"}}>Scheduling</h3>
                            <DateCalendar />
                            <div className="gx-d-none gx-d-md-block">
                                <SelectableButtonGroup className="gx-ml-10" selected={duration} onChange={onChangeDuration}>
                                    <Button key="day">
                                        <IntlMessages id="dispatch.dispatch.duration.day"/>
                                    </Button>
                                    <Button key="week">
                                        <IntlMessages id="dispatch.dispatch.duration.week"/>
                                    </Button>
                                    <Button key="month">
                                        <IntlMessages id="dispatch.dispatch.duration.month"/>
                                    </Button>
                                </SelectableButtonGroup>
                            </div>
                            <div className="gx-d-md-none">
                                <Button className="gx-ml-10 gx-mb-0 gx-dispatch-top-toolbar-filter" >
                                    <div className="gx-div-align-center gx-text-grey">
                                        <i className="material-icons gx-mr-2">tune</i>
                                        <IntlMessages id="dispatch.dispatch.duration.filter"/>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div className="gx-div-align-center gx-mb-12">
                            <div>
                                <Checkbox checked="true">Notify customer</Checkbox>
                            </div>
                            <div>
                                <ButtonGroup className="gx-customer-list-buttongroup">
                                    <Button><i className="material-icons">departure_board</i></Button>
                                    <Button><i className="material-icons">cached</i></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                :
                <div className="gx-dispatch-top-toolbar">                
                    <div className="gx-div-align-center gx-mb-12">
                        <DateCalendar />
                        <div className="gx-d-none gx-d-md-block">
                            <SelectableButtonGroup className="gx-ml-10" selected={duration} onChange={onChangeDuration}>
                                <Button key="day">
                                    <IntlMessages id="dispatch.dispatch.duration.day"/>
                                </Button>
                                <Button key="week">
                                    <IntlMessages id="dispatch.dispatch.duration.week"/>
                                </Button>
                                <Button key="month">
                                    <IntlMessages id="dispatch.dispatch.duration.month"/>
                                </Button>
                            </SelectableButtonGroup>
                        </div>
                        <div className="gx-d-md-none">
                            <Button className="gx-ml-10 gx-mb-0 gx-dispatch-top-toolbar-filter" >
                                <div className="gx-div-align-center gx-text-grey">
                                    <i className="material-icons gx-mr-2">tune</i>
                                    <IntlMessages id="dispatch.dispatch.duration.filter"/>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className="gx-div-align-center gx-mb-12">
                        <SelectableButtonGroup selected={scheduled} onChange={onChangeScheduled}>
                            <Button key="scheduled">
                                <IntlMessages id="dispatch.dispatch.scheduled"/>
                                {scheduledCount && 
                                <span className="gx-custom-rect-tag gx-bg-primary">{ scheduledCount }</span>
                                }
                            </Button>
                            <Button key="unscheduled">
                                <IntlMessages id="dispatch.dispatch.unscheduled"/>
                                {unscheduledCount && 
                                <span className="gx-custom-rect-tag gx-bg-red">{ unscheduledCount }</span>
                                }
                            </Button>
                        </SelectableButtonGroup>
        
                        <span className="gx-d-none gx-d-md-block gx-ml-10">
                            <Link to="/main/dispatch/newjob">
                                <Button className="gx-nav-btn gx-nav-dispatch-new-btn gx-mb-0" type="primary">
                                    <div className="gx-div-align-center">
                                        <i className="material-icons gx-fs-xl gx-mr-2">add</i>
                                        <IntlMessages id="dispatch.dispatch.newjob"/>
                                    </div>
                                </Button>
                            </Link>
                        </span>
                    </div>
                </div>
            }             
            </div>
        )
    }
}

export default TopToolBar;