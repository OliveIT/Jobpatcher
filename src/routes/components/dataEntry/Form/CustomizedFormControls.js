import React from "react";
import {Button, Card, Form, Input, Select} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class PriceInput extends React.Component {
  handleNumberChange = (e) => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({number});
    }
    this.triggerChange({number});
  }
  handleCurrencyChange = (currency) => {
    if (!('value' in this.props)) {
      this.setState({currency});
    }
    this.triggerChange({currency});
  }
  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  }

  constructor(props) {
    super(props);

    const value = props.value || {};
    this.state = {
      number: value.number || 0,
      currency: value.currency || 'rmb',
    };
  }

  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  }

  render() {
    const {size} = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={state.number}
          onChange={this.handleNumberChange}
          style={{width: '63%', marginRight: '5%'}}
        />
        <Select
          value={state.currency}
          size={size}
          style={{width: '32%'}}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  }
}

class CustomizedFormControls extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Card className="gx-card" title="Customized Form Controls">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem label="Price">
            {getFieldDecorator('price', {
              initialValue: {number: 0, currency: 'rmb'},
              rules: [{validator: this.checkPrice}],
            })(<PriceInput/>)}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}


const WrappedDemo = Form.create()(CustomizedFormControls);


export default (WrappedDemo);






