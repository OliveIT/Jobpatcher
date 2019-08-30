import React, {Component} from "react";
import {Button, Card, Form, Input, Select} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class CoordinatedControls extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Card className="gx-card" title="Coordinated Controls">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="Note"
            labelCol={{xs: 24, sm: 5}}
            wrapperCol={{xs: 24, sm: 12}}
          >
            {getFieldDecorator('note', {
              rules: [{required: true, message: 'Please input your note!'}],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            label="Gender"
            labelCol={{xs: 24, sm: 5}}
            wrapperCol={{xs: 24, sm: 12}}
          >
            {getFieldDecorator('gender', {
              rules: [{required: true, message: 'Please select your gender!'}],
            })(
              <Select
                placeholder="Select a option and change input text above"
                onChange={this.handleSelectChange}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            wrapperCol={{xs: 24, sm: {span: 12, offset: 5}}}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

}

const WrappedApp = Form.create()(CoordinatedControls);


export default (WrappedApp);






