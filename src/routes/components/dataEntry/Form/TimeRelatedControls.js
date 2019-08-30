import React, {Component} from "react";
import {Button, Card, DatePicker, Form, TimePicker} from "antd";

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;


class TimeRelatedControls extends Component {


  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };
      console.log('Received values of form: ', values);
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    const config = {
      rules: [{type: 'object', required: true, message: 'Please select time!'}],
    };
    const rangeConfig = {
      rules: [{type: 'array', required: true, message: 'Please select time!'}],
    };

    return (
      <Card className="gx-card" title="Time Related Controls">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="DatePicker"
          >
            {getFieldDecorator('date-picker', config)(
              <DatePicker className="gx-mb-3 gx-w-100"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="DatePicker[showTime]"
          >
            {getFieldDecorator('date-time-picker', config)(
              <DatePicker className="gx-mb-3 gx-w-100" showTime format="YYYY-MM-DD HH:mm:ss"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="MonthPicker"
          >
            {getFieldDecorator('month-picker', config)(
              <MonthPicker className="gx-mb-3 gx-w-100"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="RangePicker"
          >
            {getFieldDecorator('range-picker', rangeConfig)(
              <RangePicker className="gx-mb-3 gx-w-100"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="RangePicker[showTime]"
          >
            {getFieldDecorator('range-time-picker', rangeConfig)(
              <RangePicker className="gx-mb-3 gx-w-100" showTime format="YYYY-MM-DD HH:mm:ss"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="TimePicker"
          >
            {getFieldDecorator('time-picker', config)(
              <TimePicker className="gx-mb-3 gx-w-100"/>
            )}
          </FormItem>
          <FormItem
            wrapperCol={{
              xs: {span: 24, offset: 0},
              sm: {span: 16, offset: 8},
            }}
          >
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

}

const TimeRelated = Form.create()(TimeRelatedControls);

export default TimeRelated;
