import React, {Component} from "react";
import { injectIntl } from 'react-intl';
import {Popover, Button, Row, Col, DatePicker, TimePicker, Checkbox, Select, Switch} from 'antd';
import ActivityListItem from "components/List/ActivityListItem";
import GpsUserListItem from "components/List/GpsUserListItem";
import SearchBox from "components/SearchBox";

const { Option } = Select;
const children = [];
	
for (let i = 1; i < 3; i++) {
    children.push(<Option key={i.toString(36) + i}>All employee status</Option>);
}

const data = [
    {
        name: "Jason Marlord",
        job: "#00546",
        type: "Paid invoice",
        datetime: "4/24/2019 15:26",
        avatar: require("assets/images/avatar/avatar07.png"),
        statue: "login",
    },
    {
        name: "Peter Jonson",
        job: "#00542",
        type: "Created job",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png"),
        statue: ""
    },
    {
        name: "Kevin Moltoze",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar08.png"),
        statue: "login",
    },
    {
        name: "John Boldberg",
        job: "#00546",
        type: "Paid invoice",
        datetime: "4/24/2019 15:26",
        avatar: require("assets/images/avatar/avatar10.png"),
        statue: ""
    },
    {
        name: "Rosana Marton",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar09.png"),
        statue: ""
    }
];

class GpsDrawer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            searchText: "",
            liveEmployees: data,
        }
    }

    updateSearchEmp(key) {
        this.setState({searchText:key});
        const trimKey = key.trim();
        if(trimKey === "") {
            this.setState({liveEmployees: data});
        }
        else
        {
            let tmp_employees = [];
            data.forEach(employee => {
                let reg_string = trimKey;
                let reg_trimKey = new RegExp(reg_string, "i");
                if (employee.name.search(reg_trimKey) > -1)
                    tmp_employees.push(employee);
            });
            this.setState({liveEmployees: tmp_employees});
        }
    }

    render() {
        
        return (
            <div className="gx-dispatch-gps-drawer">
                <div className="gx-dispatch-gps-drawer-title">
                   <div>Live employee map</div>
                </div>
                <div className="gx-dispatch-gps-drawer-select-search-box">
                   <Select className="gx-dispatch-gps-dawer-select-bar" defaultValue="Repeat weekly">{children}</Select>
                   <SearchBox 
                        styleName="gx-dispatch-gps-dawer-search-bar gx-lt-icon-search-bar-lg gx-dispatch-search gx-employee-search-bar"
                        placeholder={'Search Employees'}
                        onChange={evt => this.updateSearchEmp(evt.target.value)}
                        value={this.state.searchText}
                    />
                </div>
                <div className="gx-dispatch-gps-dawer-users">
                    {this.state.liveEmployees.map((item, index) => (
                        <GpsUserListItem key={index} avatar={item.avatar} name={item.name} status={item.statue}datetime={item.datetime} >
                            { item.type } <span className="gx-link">{item.job}</span>
                        </GpsUserListItem>
                    ))}
                </div>
            </div>
        );
    }
};

export default injectIntl(GpsDrawer);
