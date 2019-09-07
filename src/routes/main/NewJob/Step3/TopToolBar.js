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
                <div className="gx-dispatch-top-toolbar" style={{paddingTop:"40px"}}>                
                    <div className="gx-div-align-center gx-mb-12 gx-addjob-step3-toptool-left-btngroup">
                        <h3 className="gx-addjob-step3-title">Scheduling</h3>
                        <DateCalendar duration={duration}/>
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
                    <div className="gx-div-align-center gx-mb-12 gx-addjob-step3-toptool-right-btngroup">
                        <div style={{paddingRight:"10px"}}>
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
            </div>
        )
    }
}

export default TopToolBar;