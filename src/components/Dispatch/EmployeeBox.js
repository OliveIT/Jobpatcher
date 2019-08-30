import React from "react";

import {Avatar, Select} from "antd";

const Option = Select.Option;

const EmployeeBox = ({ employees }) => {

    return (
        <Select className="gx-customer-profile-panel-combobox gx-dispatch-employee-box" defaultValue={0} 
                suffixIcon={employees.length > 1 ?                    
                <div className="gx-dispatch-employee-count gx-div-align-center"> {employees.length - 1 } +</div> :
                <div></div>}>
            {
                employees.map((employee, idx) =>
                    <Option key={idx} value={idx}>
                        <Avatar src={employee.avatar} className="gx-size-24 gx-mr-2" />
                        <span>{ employee.name }</span>
                    </Option>
                )
            }
        </Select>
    );
};

export default EmployeeBox;
