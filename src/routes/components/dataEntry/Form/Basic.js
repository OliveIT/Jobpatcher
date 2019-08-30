import React, {Component} from "react";
import {Button, Card, Form, Icon, Input} from "antd";

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Basic extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  render() {

    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Card className="gx-card" title="Basic">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}>
            {getFieldDecorator('userName', {
              rules: [{required: true, message: 'Please input your username!'}],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
            )}
          </FormItem>
          <FormItem
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
          >
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            <Button className="gx-mb-0"
                    type="primary"
                    htmlType="submit"
                    disabled={hasErrors(getFieldsError())}
            >
              Log in
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

}

const WrappedNormalLoginForm = Form.create()(Basic);


export default WrappedNormalLoginForm;

