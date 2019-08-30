import React, {Component} from "react"
import EmployeeListSingle from './EmployeeListSingle.js'


class EmployeeList extends Component {
    state = {
        EmployeeListArray: [
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
        ]
    }
    render () {
        let EmployeeListItem = this.state.EmployeeListArray.map(
            (EmployeeSingle, index) => <EmployeeListSingle 
            key={index}
            image={EmployeeSingle.image}
            name={EmployeeSingle.name}
            position={EmployeeSingle.position}
            />
        )      
        return(
            <div className="gx-employee-work-hours-list-single-area">
                { EmployeeListItem }
            </div>
        )
    }
}
export default EmployeeList
