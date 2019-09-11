import React, {Component} from "react";
import {Button, Popover, Calendar} from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import {changeSpecialDateFormatSS} from "util/DateTime";
import moment from "moment";

class DateCalendar extends Component {
    
    constructor(props, context) {
      super(props, context);
        
      this.state = {
          currentDate: moment(new Date())
      }
    }

    onChangeDate( date ) {
        this.setState({
            currentDate: date
        })
    }

    render () {
        const {className} = this.props;
        const { currentDate } = this.state;
        return (
            <ButtonGroup className={className + " gx-customer-list-buttongroup"}>
                <Button>
                    <i className="material-icons">chevron_left</i>
                </Button>
                <Popover overlayClassName="gx-popover-date-calendar" placement="bottom" 
                            content={ <Calendar fullscreen={false} onChange={this.onChangeDate.bind(this)}/>}
                            trigger="click">                    
                    <Button>
                        <span className="gx-text-normal">{ changeSpecialDateFormatSS( currentDate ) }</span>
                    </Button>
                </Popover>       
                <Button>
                    <i className="material-icons">chevron_right</i>
                </Button>
            </ButtonGroup>
        )
    }
}

export default DateCalendar;