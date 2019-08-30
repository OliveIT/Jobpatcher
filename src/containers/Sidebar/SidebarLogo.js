import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {onNavStyleChange, toggleCollapsedSideNav} from "appRedux/actions/Setting";
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  MOBILE_SIZE,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";


class SidebarLogo extends Component {

  render() {
    const {width, themeType, navCollapsed} = this.props;
    let {navStyle} = this.props;
    if (width < MOBILE_SIZE && navStyle === NAV_STYLE_FIXED) {
      navStyle = NAV_STYLE_DRAWER;
    }
    return (
      <div className="gx-layout-sider-header">
        <Link to="/" className="gx-site-logo-2">
          {navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ?
            null :
            themeType === THEME_TYPE_LITE ?
              <img alt="" src={require("assets/images/logo-white.png")} style={{width: '30px', height: '30px'}}/> :
              <img alt="" src={require("assets/images/logo.png")} style={{width: '30px', height: '30px'}}/>}
        </Link>

      </div>
    );
  }
}

const mapStateToProps = ({settings}) => {
  const {navStyle, themeType, width, navCollapsed} = settings;
  return {navStyle, themeType, width, navCollapsed}
};

export default connect(mapStateToProps, {
  onNavStyleChange,
  toggleCollapsedSideNav
})(SidebarLogo);
