import React, {Component} from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";

import CustomMenuItem from "components/CustomMenuItem";
import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";

import Auxiliary from "util/Auxiliary";

import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import {connect} from "react-redux";
import {setCurrentPage} from "../../appRedux/actions/Setting";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class SidebarContent extends Component {

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
        <SidebarLogo/>
        <div className="gx-sidebar-content">
          <CustomScrollbars className="gx-layout-sider-scrollbar">
            <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
              mode="inline">

              <MenuItemGroup key="main" className="gx-menu-group">
              
                <Menu.Item key="main/dashboard">
                  <CustomMenuItem link="/main/dashboard" icon="donut_small" />
                </Menu.Item>

                <Menu.Item key="main/circle">
                    <CustomMenuItem link="/main/circle" icon="check_circle" />
                </Menu.Item>

                <Menu.Item key="main/customers">
                  <CustomMenuItem link="/main/customers" icon="account_circle" />
                </Menu.Item>

                <Menu.Item key="main/radio">
                  <CustomMenuItem link="/main/radio" icon="radio_button_checked" />
                </Menu.Item>

                <SubMenu key="financial" 
                         title={<i className="material-icons">monetization_on</i>} >
                  <Menu.Item key="main/financial/invoice">
                    <Link to="/main/financial/invoice">                      
                      <div className="gx-div-align-center">
                        <i className="material-icons gx-mr-10">monetization_on</i>
                        <span><IntlMessages id="sidebar.financial.invoices"/></span>
                      </div>
                    </Link>            
                  </Menu.Item>
                  <Menu.Item key="main/financial/tax">
                    <Link to="/main/financial/tax">                      
                      <div className="gx-div-align-center">
                        <i className="material-icons gx-mr-10">local_atm</i>
                        <span><IntlMessages id="sidebar.financial.taxes"/></span>
                      </div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="main/financial/onlinepayment">
                    <Link to="/main/financial/onlinepayment">                      
                      <div className="gx-div-align-center">
                        <i className="material-icons gx-mr-10">credit_card</i>
                        <span><IntlMessages id="sidebar.financial.onlinepayment"/></span>
                      </div>
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </MenuItemGroup>
              
              <MenuItemGroup key="others" className="gx-menu-group-bottom" >
                
                <Menu.Item key="help">
                  <CustomMenuItem link="/help" icon="help" />
                </Menu.Item>

                <Menu.Item key="setting">
                  <CustomMenuItem link="/setting" icon="settings" />
                </Menu.Item>

              </MenuItemGroup>
            </Menu>            
          </CustomScrollbars>
        </div>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};
const mapStateToProps = ({settings}) => {
  const {navStyle, themeType, locale, pathname} = settings;
  return {navStyle, themeType, locale, pathname}
};
export default connect(mapStateToProps, {setCurrentPage})(SidebarContent);

