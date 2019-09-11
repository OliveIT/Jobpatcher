import React, {Component} from "react"
import EmployeeList from './EmployeeList.js'
import EmployeeListSearch from './EmployeeListSearch.js'
import EmployeeListTimeTable from './EmployeeListTimeTable.js'

import "./style/index.css";

class EmployeeWorkHours extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return(
            <div className="gx-employee-work-hours-area">
                <div className="gx-employee-work-hours ant-card gx-card-widget gx-card-full gx-dispatcher-job-panel ant-card-bordered gx-ss-dispatch-schedule-container">
                    <div className="gx-employee-work-hours-list-area">
                        <EmployeeListSearch />
                        <EmployeeList />
                    </div>
                    <div className="gx-employee-work-hours-list-time-table-area">
                        <EmployeeListTimeTable/>
                    </div>
                </div>
            </div>
        )
    }
}
export default EmployeeWorkHours
