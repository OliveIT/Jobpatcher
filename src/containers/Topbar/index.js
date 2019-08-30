import React, {Component} from "react";
import {Layout, Popover, Button, Badge, Menu} from "antd";
import { injectIntl } from 'react-intl';
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import languageData from "./languageData";
import {switchLanguage, updateWindowWidth, setCurrentPage} from "../../appRedux/actions/Setting";
import SearchBox from "components/SearchBox";
import UserInfo from "components/UserInfo";
import SearchBar from "components/TopMenu/SearchBar";
import AppNotification from "components/TopMenu/AppNotification";
import MailNotification from "components/MailNotification";
import PopupNew from "components/TopMenu/PopupNew";
import PopupMore from "components/TopMenu/PopupMore";
import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";

import BottomMenu from "./BottomMenu";

import {NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE, MOBILE_SIZE} from "../../constants/ThemeSetting";
import {connect} from "react-redux";

const {Header} = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const MenuItem = ({link, icon, title}) => {
  if( link === null || link === "" )
    link = "#";
  return (
    <Link to={link}>
          <div className="gx-top-menu-item">
            <div>
              <i className="material-icons">{icon}</i>
              <div>
                <IntlMessages id={title}/>
              </div>
            </div>
          </div>
    </Link>
  )
}
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

const BOTTOM_MENU_W = 1200;

class Topbar extends Component {

  state = {
    searchText: '',
  };

  languageMenu = () => (
    <CustomScrollbars className="gx-popover-lang-scroll">
      <ul className="gx-sub-popover">
        {languageData.map(language =>
          <li className="gx-media gx-pointer" key={JSON.stringify(language)} onClick={(e) =>
            this.props.switchLanguage(language)
          }>
            <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`}/>
            <span className="gx-language-text">{language.name}</span>
          </li>
        )}
      </ul>
    </CustomScrollbars>);

  updateSearchChatUser = (evt) => {
    this.setState({
      searchText: evt.target.value,
    });
  };

  componentDidMount() {
    this.props.updateWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      this.props.updateWindowWidth(window.innerWidth)
    });
  }

  render() {
    const {locale, width, navCollapsed, navStyle, pathname, currentPage, setCurrentPage, intl: {formatMessage}} = this.props;
    
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
        <Header>
          { width < BOTTOM_MENU_W  &&
            <div className="gx-header-title">
              <IntlMessages id={currentPage}/>
            </div>
          }

          { width >= BOTTOM_MENU_W  &&
            <Auxiliary>
              <img className="gx-header-logo" src={require("assets/images/logo.png")} style={{width: '30px', height: '30px'}}/>
            
              <div className="gx-header-menu">
                <Menu
                  defaultOpenKeys={[defaultOpenKeys]}
                  selectedKeys={[selectedKeys]}
                  mode="horizontal">
                  
                  <Menu.Item key="main/dashboard">
                    <MenuItem link="/main/dashboard" icon="donut_small" title="topmenu.menu.dashboard" />
                  </Menu.Item>

                  <SubMenu key="main/dispatch"
                         popupOffset={[0,0]}
                         title={<MenuItem link="#" icon="check_circle" title="topmenu.menu.dispatch"  />} >
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
                    <MenuItem link="/main/customers" icon="account_circle" title="topmenu.menu.customers"  />
                  </Menu.Item>

                  <Menu.Item key="main/radio">
                    <MenuItem link="/main/radio" icon="radio_button_checked" title="topmenu.menu.sales"  />
                  </Menu.Item>

                  <Menu.Item key="main/financial/invoice">
                    <MenuItem link="/help" icon="monetization_on" title="topmenu.menu.finance"  />
                  </Menu.Item>
                                                          
                  <Menu.Item key="help">
                    <MenuItem link="/help" icon="help" title="topmenu.menu.help"  />
                  </Menu.Item>
                </Menu>
              </div>
            </Auxiliary>
          }

          <ul className="gx-header-notifications gx-ml-auto">          
            {width >= MOBILE_SIZE ?
              <Auxiliary>
                <li className="gx-notify gx-notify-search gx-d-none gx-d-md-block">
                  <SearchBar width={width} />
                </li>
                <li className="gx-notify">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottom" content={<AppNotification/>}
                           trigger="click">
                    <span className="gx-pointer gx-d-block"><i className="material-icons">notifications</i></span>
                  </Popover>
                </li>

                <li className="gx-msg">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight"
                           content={<MailNotification/>} trigger="click">
                  <span className="gx-pointer gx-status-pos gx-d-block">
                    <Badge count={25}>
                      <i className="material-icons">chat</i>
                    </Badge>
                  </span>
                  </Popover>
                </li>

                <li className="gx-spin">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight"
                           content={<div></div>} trigger="click">
                  <span className="gx-pointer gx-status-pos gx-d-block">   
                    <Badge count={5}>
                      <i className="material-icons">sms</i>
                    </Badge>                    
                  </span>
                  </Popover>
                </li>

                <li className="gx-new">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight"
                           content={<PopupNew/>} trigger="click">
                    <Button className="gx-nav-btn gx-nav-new-btn gx-mb-0" style={{width: '100px'}} >
                      <div className="gx-div-align-center">
                        <i className="material-icons gx-fs-xl gx-mr-2">add</i>
                        <IntlMessages id="New"/>
                      </div>
                    </Button>
                  </Popover>                  
                </li>
                <li className="gx-user-nav"><UserInfo/></li>
              </Auxiliary>               
              : 
              <Auxiliary>
                <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-md-none">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={
                    <SearchBox styleName="gx-popover-search-bar"
                              placeholder={formatMessage({id:"topmenu.search.placeholder"})}
                              onChange={this.updateSearchChatUser.bind(this)}
                              value={this.state.searchText}/>
                  } trigger="click">
                    <span className="gx-pointer gx-d-block"><i className="material-icons">search</i></span>
                  </Popover>
                </li>
                <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-md-none">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" 
                          content={<PopupMore notify={0} chat={3} sms={5} />} trigger="click">
                    <span className="gx-pointer gx-d-block"><i className="material-icons">apps</i></span>
                  </Popover>
                </li>
                <li className="gx-new">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight"
                           content={<PopupNew/>} trigger="click">
                    <Button className="gx-mb-0 gx-no-box-shadow gx-nav-btn gx-nav-new-btn" shape="circle" size="small" icon="plus"/>
                  </Popover>
                </li>
                <li className="gx-user-nav"><UserInfo/></li>
              </Auxiliary>         
            }
          </ul>
        </Header>
        {navStyle === NAV_STYLE_DRAWER || ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < BOTTOM_MENU_W) ?
          <BottomMenu /> : null} 
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({settings}) => {
  const {locale, navStyle, navCollapsed, width, pathname, currentPage} = settings;
  return {locale, navStyle, navCollapsed, width, pathname, currentPage}
};

export default connect(mapStateToProps, {switchLanguage, setCurrentPage, updateWindowWidth})(injectIntl(Topbar));
