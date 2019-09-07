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
        name: "Robert Brannon",
        job: "#00546",
        type: "Paid invoice",
        datetime: "4/24/2019 15:26",
        avatar: require("assets/images/avatar/avatar01.png"),
        statue: "login",
    },
    {
        name: "Leana Rosebell",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar03.png"),
        statue: "login",
    },
    {
        name: "Tomas Belford",
        job: "#00542",
        type: "Created job",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png"),
        statue: ""
    },{
        name: "Robert Brannon",
        job: "#00546",
        type: "Paid invoice",
        datetime: "4/24/2019 15:26",
        avatar: require("assets/images/avatar/avatar01.png"),
        statue: ""
    },
    {
        name: "Leana Rosebell",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar03.png"),
        statue: ""
    },
    {
        name: "Tomas Belford",
        job: "#00542",
        type: "Created job",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png"),
        statue: ""
    },
    {
        name: "Leana Rosebell",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar03.png"),
        statue: ""
    },
    {
        name: "Tomas Belford",
        job: "#00542",
        type: "Created job",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png"),
        statue: ""
    },
    {
        name: "Leana Rosebell",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar03.png"),
        statue: ""
    },
    {
        name: "Tomas Belford",
        job: "#00542",
        type: "Created job",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png"),
        statue: ""
    },
    {
        name: "Leana Rosebell",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar03.png"),
        statue: ""
    },
    {
        name: "Tomas Belford",
        job: "#00542",
        type: "Created job",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png"),
        statue: ""
    },
];

class GpsDrawer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

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
                    {data.map((item, index) => (
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
