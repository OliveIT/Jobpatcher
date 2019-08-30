import React, {Component} from "react";
import {Card, Form, Input} from "antd";

const FormItem = Form.Item;


const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const {getFieldDecorator} = props.form;
  return (
    <Form layout="inline">
      <FormItem label="Username">
        {getFieldDecorator('username', {
          rules: [{required: true, message: 'Username is required!'}],
        })(<Input/>)}
      </FormItem>
    </Form>
  );
});

class StoreFormData extends Component {

  state = {
    fields: {
      username: {
        value: 'benjycui',
      },
    },
  };
  handleFormChange = (changedFields) => {
    this.setState({
      fields: {...this.state.fields, ...changedFields},
    });
  }

  render() {
    const fields = this.state.fields;
    return (
      <Card className="gx-card" title="Store Form Data">
        <CustomizedForm {...fields} onChange={this.handleFormChange}/>
        <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
      </Card>
    );
  }

}

export default StoreFormData;






