import React, {Component} from "react"
import EmployeeListTimeTablePerson from "./EmployeeListTimeTablePerson.js"


class EmployeeListTimeTable extends Component {
    
    render () {
          
        return(
            <div className="gx-employee-work-hours-table-area">

                <div className="gx-employee-work-hours-table-area-header">
                    <div className="gx-employee-work-hours-table-area-header-date">
                        <p>Sunday, july 11, 2019</p>
                    </div>
                    <div className="gx-employee-work-hours-table-area-time">
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>8am</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>9am</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>10am</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>11am</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>12pm</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>1pm</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>2pm</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>3pm</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>4pm</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>5pm</p>
                        </div>
                        <div className="gx-employee-work-hours-table-area-time-single">
                            <p>6pm</p>
                        </div>
                    </div>
                </div>
				
                
                    <EmployeeListTimeTablePerson/>
                
            </div>
        )
    }
}
export default EmployeeListTimeTable
