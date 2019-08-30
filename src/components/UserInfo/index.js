import React, {Component} from "react";
import {connect} from "react-redux";
import {Avatar, Popover, Divider, Button} from "antd";
import {userSignOut} from "appRedux/actions/Auth";
import IntlMessages from "util/IntlMessages";
import IntlHtmlMessages from "util/IntlHtmlMessages";

const user = {
  avatar: require("assets/images/avatar.png"),
  name: 'Homer Cole',
  email: "Email@address.com",
  trial: 8,

}

class UserInfo extends Component {
  render() {
    const userMenuOptions = (
      <div className="gx-popover-no-padding" style={{minWidth: '215px', backgroundColor: 'white'}}>
        <div className="gx-p-3 gx-pb-2">
          <div className="gx-flex-row gx-flex-nowrap gx-flex">
            <img alt="avatar" src={user.avatar} className="gx-avatar-img gx-size-36 gx-border-0 gx-mr-12"/>
            <div>  
              <div className="gx-sub-title gx-fs-md gx-mb-1">{user.name}</div>
              <div className="gx-fs-sm">{user.email}</div>
              <div className="gx-fs-sm gx-text-grey gx-mb-2">
                <IntlHtmlMessages id="userinfo.trial" values={{value: user.trial}} />                    
              </div>

              <Button type="primary" style={{height: '30px', width: '117px', boxShadow: 'none'}} >
                <div className="gx-fs-13-20 gx-font-weight-medium">
                  <IntlHtmlMessages id="userinfo.upgrade"/>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <Divider className="gx-mt-2 gx-mb-2" />
        <div>
            <div className="gx-menuitem gx-fs-13-20">
                <i className="material-icons gx-mr-10">account_box</i>
                <IntlMessages id="userinfo.myprofile" />
            </div>
            <div className="gx-menuitem">
                <i className="material-icons gx-mr-10">business</i>
                <IntlMessages id="userinfo.company" />
            </div>
            <div className="gx-menuitem">
                <i className="material-icons gx-mr-10">account_balance_wallet</i>
                <IntlMessages id="userinfo.billings" />
            </div>
            <div className="gx-menuitem">
                <i className="material-icons gx-mr-10">font_download</i>
                <div>
                  <span className="gx-mr-1"><IntlMessages id="userinfo.language" /></span>
                  English
                </div>
            </div>
        </div>
        <Divider className="gx-mt-2 gx-mb-2" />
        <div className="gx-mb-3">
            <div className="gx-menuitem">
                <i className="material-icons gx-mr-10">feedback</i>
                <IntlMessages id="userinfo.feedback" />
            </div>
            <div className="gx-menuitem">
                <i className="material-icons gx-mr-10">lock</i>
                <IntlMessages id="userinfo.lockscreen" />
            </div>
            <div className="gx-menuitem">
                <i className="material-icons gx-mr-10">input</i>
                <IntlMessages id="userinfo.signout" />
            </div>
        </div>
      </div>
    );

    return (
      <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
               trigger="click">
        <Avatar src={user.avatar}
                className="gx-avatar gx-pointer" alt=""/>
      </Popover>
    )

  }
}

export default connect(null, {userSignOut})(UserInfo);
