import React, {Component} from "react";
import {Button, Form, Input} from "antd";
import IntlMessages from "util/IntlMessages";

const FormItem = Form.Item;


class ResetPassword extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.props.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  };

  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <div className="gx-login-container">
        <div className="gx-login-content">

          <div className="gx-login-header">
            <img src={require("assets/images/logo-white.png")} alt="wieldy" title="wieldy"/>
          </div>
          <div className="gx-mb-4">
            <h2>Reset Password</h2>
            <p><IntlMessages id="appModule.enterPasswordReset"/></p>
          </div>


          <Form onSubmit={this.handleSubmit} className="gx-login-form gx-form-row0">

            <FormItem>
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input type="password" placeholder="New Password"/>
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input placeholder="Retype New Password" type="password" onBlur={this.handleConfirmBlur}/>
              )}
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit">
                <IntlMessages id="app.userAuth.reset"/>
              </Button>
            </FormItem>
          </Form>


        </div>
      </div>
    );
  }
}

const WrappedResetPasswordForm = Form.create()(ResetPassword);

export default (WrappedResetPasswordForm);
