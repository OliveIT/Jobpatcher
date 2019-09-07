import React, {Component} from "react";
import EmployeeList from './EmployeeList.js';
import EmployeeListSearch from './EmployeeListSearch.js';
import EmployeeListTimeTable from './EmployeeListTimeTable.js';

import "./style/index.css";

const dates = [
    { dday: "Mon", ddate: 22},
    { dday: "Tue", ddate: 23},
    { dday: "Wed", ddate: 24},
    { dday: "Thu", ddate: 25},
    { dday: "Fri", ddate: 26},
    { dday: "Sat", ddate: 27},
    { dday: "Sun", ddate: 28}
]


class EmployeeWorkHours extends Component {
   
    constructor (props) {
        super(props);
    }

    render () {    
        
        return(
            <div className="gx-employee-work-hours-area gx-addjob-step3-work-hour-area"  style={{position: "relative"}}>
                <div className="gx-employee-work-hours ant-card gx-card-widget gx-card-full gx-dispatcher-job-panel ant-card-bordered">
                    
                    <div className="gx-employee-work-hours-list-area">
                        <EmployeeListSearch />
                        <EmployeeList />
                    </div>
                    <div className="gx-employee-work-hours-list-time-table-area">
                        <EmployeeListTimeTable/>
                    </div>
                    {/* <div style={{display:"flex"}}>
                        <div style={{width:"300px",display:"inline-block"}}>
                            <EmployeeListSearch />
                        </div>
                        <div>
                            <div style={{borderBottom:"2px solid #eee"}}>
                                Monday, July 22, 2019 - Sunday, July 28, 2019
                            </div>
                            <div>
                                {dates.map((dateItem, index) =>
                                    <div key={index}>
                                        <div>{dateItem.dday}</div>
                                        <div>{dateItem.ddate}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
export default EmployeeWorkHours
