import React, { Component } from 'react'

class EmployeeListSearch extends Component {
    render(){
        let { image, name, position } = this.props
        return(
            <div className="gx-employee-work-hours-search">
                <div className="gx-search-bar gx-lt-icon-search-bar-lg gx-dispatch-search">
                    <div className="gx-form-group">
                        <input className="ant-input" type="search" placeHolder="Search employee" value="" />
                        <span className="gx-search-icon gx-pointer">
                            <div className="ant-row-flex gx-w-100 gx-h-100 gx-justify-content-center gx-align-items-center">
                                <i className="material-icons">search</i>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default EmployeeListSearch