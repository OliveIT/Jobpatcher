import React, {Component} from "react"
import EmployeeListTimeTablePerson from "./EmployeeListTimeTablePerson.js"
import { changeDayDateMonthYearFormatSS } from "util/DateTime";


class EmployeeListTimeTable extends Component {
    
    render () {
          
        return(
            <div className="gx-employee-work-hours-table-area">
                <div className="gx-employee-work-hours-table-area-header">
                    <div className="gx-employee-work-hours-table-area-header-date">
                        <p>{changeDayDateMonthYearFormatSS(new Date())}</p>
                    </div>
                    <div className="gx-employee-work-hours-table-area-time">
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>8 am</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>9 am</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>10 am</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>11 am</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>12 pm</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>1 pm</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>2 pm</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>3 pm</p>
                        </div>
                    </div>
                </div>
                    <EmployeeListTimeTablePerson/>
            </div>
        )
    }
}
export default EmployeeListTimeTable
