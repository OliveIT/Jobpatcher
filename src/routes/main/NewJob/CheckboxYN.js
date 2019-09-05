
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, Button } from 'antd';

class CheckboxYN extends React.Component {
  state = {
    checked: true,
    disabled: false,
  };

  onChange = e => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const label = `${this.state.checked ? 'Yes' : 'No'}`;
    return (
      <div>
          <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </Checkbox>
      </div>
    );
  }
}

export default CheckboxYN;
          