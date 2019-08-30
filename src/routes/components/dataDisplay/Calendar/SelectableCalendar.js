import React from "react";
import {Alert, Calendar, Card} from "antd";
import moment from "moment";

class SelectableCalendar extends React.Component {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  };
  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  };
  onPanelChange = (value) => {
    this.setState({value});
  };

  render() {
    const {value, selectedValue} = this.state;
    return (
      <Card className="gx-card" title="Selectable Calendar">
        <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}/>
        <Calendar className="gx-com-calendar" value={value} onSelect={this.onSelect}
                  onPanelChange={this.onPanelChange}/>
      </Card>
    );
  }
}

export default SelectableCalendar;
