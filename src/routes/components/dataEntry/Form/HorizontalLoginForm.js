import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Card, Checkbox, Form, Icon, Input, message} from "antd";

import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from "appRedux/actions/Auth";
import "./horizontalLoginForm.less";
import CircularProgress from "components/CircularProgress/index";

const FormItem = Form.Item;

class HorizontalLoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("values", values);
      if (!err) {
        this.props.showAuthLoader();
        this.props.userSignIn(values);
      }
    });
  };

  constructor() {
    super();
    this.state = {
      email: 'demo@example.com',
      password: 'demo#123'
    }
  }

  render() {

    const {getFieldDecorator} = this.props.form;
    const {showMessage, loader, alertMessage} = this.props;

    return (
      <Card className="gx-card" title="Horizontal Login Form">
        <Form onSubmit={this.handleSubmit} className="gx-login-form gx-form-row0">
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{required: true, message: 'Please input your email!'}],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Email"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <span className="gx-link login-form-forgot">Forgot password</span>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <span className="gx-link">register now!</span>
          </FormItem>
        </Form>

        {loader &&
        <div className="gx-loader-view">
          <CircularProgress/>
        </div>
        }
        {showMessage &&
        message.error(alertMessage)}
      </Card>
    );
  }

}

const WrappedNormalLoginForm = Form.create()(HorizontalLoginForm);
const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, authUser} = auth;
  return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(WrappedNormalLoginForm);
