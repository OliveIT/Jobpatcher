import React, { Component } from 'react'

class EmployeeListSingle extends Component {
    render(){
		
        let { image, name, position } = this.props
        return(
            <div className="gx-employee-work-hours-list-single">
				<span className="border-4px"></span>
                <div className="gx-employee-work-hours-list-single-content-area">
                    <div className="gx-employee-work-hours-list-single-img">
                        <img
                            alt="Special Edition Party Spas"
                            src={image}
                        />
                    </div>
                    <div className="gx-employee-work-hours-list-single-content">
                        <a href="#_"><h2>{name}</h2></a>
                        <p>{position}</p>
						
                    </div>
                </div>
            </div>
        )
    }
}
export default EmployeeListSingle