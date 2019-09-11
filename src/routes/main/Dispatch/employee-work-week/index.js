import React, {Component} from "react"
import EmployeeList from './EmployeeList.js'
import EmployeeListSearch from './EmployeeListSearch.js'
import EmployeeListTimeTable from './EmployeeListTimeTable.js'
import EmployeeListSingle from './EmployeeListSingle.js'

import "./style/index.css";

const Employees = [
    {
        image: require("assets/images/op.png"),
        name: 'Peter Jonson',
        position: 'Field worker',
    },
    {
        image: require("assets/images/avatar/avatar04.png"),
        name: 'Robert Adwood',
        position: 'Field worker',
    },
    {
        image: require("assets/images/avatar/avatar06.png"),
        name: 'Alena Mortaza',
        position: 'Dispatcher ',
    },
];

class EmployeeWorkweek extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return(
            <div>
            <div className="gx-employee-work-hours-area">
                here is week
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
            {/* <div className="gx-employee-work-hours-area gx-employee-week-area">
                <table>
                    <thead>
                        <tr>
                            <th rowspan="2"><EmployeeListSearch/></th>
                            <td colspan="7">JULY 1 - JULY 7, 2019</td>
                        </tr>
                        <tr>
                            <td><span>1</span><span className="gx-ss-float-right">Sun</span></td>
                            <td><span>2</span><span className="gx-ss-float-right">Mon</span></td>
                            <td><span>3</span><span className="gx-ss-float-right">Tue</span></td>
                            <td><span>4</span><span className="gx-ss-float-right">Wed</span></td>
                            <td><span>5</span><span className="gx-ss-float-right">Thu</span></td>
                            <td><span>6</span><span className="gx-ss-float-right">Fri</span></td>
                            <td><span>7</span><span className="gx-ss-float-right">Sat</span></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><EmployeeListSingle image={Employees[0].image} name={Employees[0].name} position={Employees[0].position}/></th>
                            <td>sa</td>
                            <td>
                                <div style={{display:"flex",backgroundColor:"white",padding:"10px",borderBottom:"1px solid #ddd",borderLeft:"3px solid #08bdc5"}}>
                                    <img src={Employees[0].image}></img>
                                    <div>
                                        <div>Mark Ronaldo</div>
                                        <span>2:30 PM - 3:30 PM</span>
                                    </div>
                                </div>
                                <div style={{display:"flex",backgroundColor:"white",padding:"10px",borderBottom:"1px solid #ddd",borderLeft:"3px solid #08bdc5"}}>
                                    <img src={Employees[0].image}></img>
                                    <div>
                                        <div>Mark Ronaldo</div>
                                        <span>2:30 PM - 3:30 PM</span>
                                    </div>
                                </div>
                            </td>
                            <td>sa</td>
                            <td>
                                <div style={{display:"flex",backgroundColor:"white",padding:"10px",borderBottom:"1px solid #ddd",borderLeft:"3px solid #08bdc5"}}>
                                    <img src={Employees[0].image}></img>
                                    <div>
                                        <div>Mark Ronaldo</div>
                                        <span>2:30 PM - 3:30 PM</span>
                                    </div>
                                </div>
                            </td>
                            <td>sa</td>
                            <td>sa</td>
                            <td>sa</td>
                        </tr>
                        <tr>
                            <th><EmployeeListSingle image={Employees[1].image} name={Employees[1].name} position={Employees[1].position}/></th>
                            <td>sa</td>
                            <td>sa</td>
                            <td>sa</td>
                            <td>sa</td>
                            <td>
                                <div style={{display:"flex",backgroundColor:"white",padding:"10px",borderBottom:"1px solid #ddd",borderLeft:"3px solid #39bf58"}}>
                                    <img src={Employees[0].image}></img>
                                    <div>
                                        <div>Mark Ronaldo</div>
                                        <span>2:30 PM - 3:30 PM</span>
                                    </div>
                                </div>
                            </td>
                            <td>sa</td>
                            <td>sa</td>
                        </tr>
                        <tr>
                            <th><EmployeeListSingle image={Employees[2].image} name={Employees[2].name} position={Employees[2].position}/></th>
                            <td>sa</td>
                            <td>sa</td>
                            <td>sa</td>
                            <td>sa</td>
                            <td>sa</td>
                            <td>
                                <div style={{display:"flex",backgroundColor:"white",padding:"10px",borderBottom:"1px solid #ddd",borderLeft:"3px solid #f7c43d"}}>
                                    <img src={Employees[0].image}></img>
                                    <div>
                                        <div>Mark Ronaldo</div>
                                        <span>2:30 PM - 3:30 PM</span>
                                    </div>
                                </div>
                            </td>
                            <td>sa</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
            </div>
        )
    }
}
export default EmployeeWorkweek
