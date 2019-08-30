import React, {Component} from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";

import CustomMenuItem from "components/CustomMenuItem";

import {setCurrentPage} from "../../../appRedux/actions/Setting";

import Auxiliary from "util/Auxiliary";

import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../../constants/ThemeSetting";
import IntlMessages from "../../../util/IntlMessages";
import {connect} from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const SubMenuItem = ({link, icon, title}) => {
  if( link === null || link === "" )
    link = "#";
  return (
    <Link to={link}>
          <div className="gx-div-align-center">
            <i className="material-icons gx-mr-10">{icon}</i>
            <div>
              <IntlMessages id={title}/>
            </div>
          </div>
    </Link>
  )
}

class BottomMenu extends Component {

  getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  render() {
    const {themeType, navStyle, pathname, setCurrentPage} = this.props;
    var selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    switch (pathname) {
    case "/main/dashboard":
      setCurrentPage("sidebar.dashboard");
    break;
    case "/main/customers":
      setCurrentPage("sidebar.customers");
    break;       
    case "/main/customers/profile":
      selectedKeys = "main/customers";
      setCurrentPage("sidebar.customers.profile");
    break;    
    }
    return (
      <Auxiliary>
        <div className="gx-bottom-menu-content">
            <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
              mode="horizontal">
              
                <Menu.Item key="main/dashboard">
                  <CustomMenuItem link="/main/dashboard" icon="donut_small" />
                </Menu.Item>

                <SubMenu key="main/dispatch"
                         title={<CustomMenuItem icon="check_circle" />} >
                    <Menu.Item key="main/dispatch">
                      <SubMenuItem link="/main/dispatch" icon="compass_calibration" title="topmenu.menu.dispatch"  />
                    </Menu.Item>
                    <Menu.Item key="main/dispatch/schedule">
                      <SubMenuItem link="/main/dispatch/schedule" icon="event" title="topmenu.menu.dispatch.schedule"  />
                    </Menu.Item>
                    <Menu.Item key="main/dispatch/employees">
                      <SubMenuItem link="/main/dispatch/employees" icon="assignment_ind" title="topmenu.menu.dispatch.employees"  />
                    </Menu.Item>
                    <Menu.Item key="main/dispatch/gps">
                      <SubMenuItem link="/main/dispatch/gps" icon="near_me" title="topmenu.menu.dispatch.gps"  />
                    </Menu.Item>
                </SubMenu>

                <Menu.Item key="main/customers">
                  <CustomMenuItem link="/main/customers" icon="account_circle" />
                </Menu.Item>

                <Menu.Item key="main/radio">
                  <CustomMenuItem link="/main/radio" icon="radio_button_checked" />
                </Menu.Item>

                <SubMenu key="financial" 
                         title={<CustomMenuItem icon="monetization_on" />} >
                  <Menu.Item key="main/financial/invoice">
                    <SubMenuItem link="/main/financial/invoice" icon="monetization_on" title="sidebar.financial.invoices"  />
                  </Menu.Item>
                  <Menu.Item key="main/financial/tax">
                    <SubMenuItem link="/main/financial/tax" icon="local_atm" title="sidebar.financial.taxes"  />
                  </Menu.Item>
                  <Menu.Item key="main/financial/onlinepayment">
                    <SubMenuItem link="/main/financial/onlinepayment" icon="credit_card" title="sidebar.financial.onlinepayment"  />
                  </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
      </Auxiliary>
    );
  }
}

BottomMenu.propTypes = {};
const mapStateToProps = ({settings}) => {
  const {navStyle, themeType, locale, pathname} = settings;
  return {navStyle, themeType, locale, pathname}
};
export default connect(mapStateToProps, {setCurrentPage})(BottomMenu);

