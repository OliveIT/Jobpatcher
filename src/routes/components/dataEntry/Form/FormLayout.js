import React, {Component} from "react";
import {Button, Card, Form, Input, Radio} from "antd";

const FormItem = Form.Item;

class FormLayout extends Component {

  handleFormLayoutChange = (e) => {
    this.setState({formLayout: e.target.value});
  }

  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  render() {
    const {formLayout} = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: {xs: 24, sm: 6},
      wrapperCol: {xs: 24, sm: 14},
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: {xs: 24, sm: {span: 14, offset: 6}},
    } : null;
    return (
      <Card className="gx-card" title="Form Layout">
        <Form layout={formLayout}>
          <FormItem
            label="Form Layout"
            {...formItemLayout}
          >
            <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </FormItem>
          <FormItem
            label="Field A"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder"/>
          </FormItem>
          <FormItem
            label="Field B"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder"/>
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

}

export default FormLayout;






