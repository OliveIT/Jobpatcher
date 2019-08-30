import React, {Component} from "react";
import {Tabs} from "antd";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";

const TabPane = Tabs.TabPane;

const MENU_ITEMS = [
    {
        title: "topmenu.menu.dispatch",
        link: "/main/dispatch"
    },
    {
        title: "topmenu.menu.dispatch.schedule",
        link: "/main/dispatch/schedule"
    },
    {
        title: "topmenu.menu.dispatch.employees",
        link: "/main/dispatch/employees"
    },
    {
        title: "topmenu.menu.dispatch.gps",
        link: "/main/dispatch/gps"
    }
]

class TopMenu extends Component {

    constructor(props, context) {
        super(props, context);
    
    }

    render () {
        const { currentPage } = this.props;
        return (
            <Tabs className="gx-dispatch-topmenu" defaultActiveKey={currentPage}>
                { MENU_ITEMS.map( (menuItem, index) => (
                    <TabPane tab={<Link to={menuItem.link}><IntlMessages id={menuItem.title}/></Link>} key={index}>
                    </TabPane>
                ))}
            </Tabs>
        )
    }
}

export default TopMenu;