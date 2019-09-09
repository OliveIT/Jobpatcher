import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag } from "antd";

import { injectIntl } from 'react-intl';
import IntlMessages from "util/IntlMessages";
import {changeDateFormat} from "util/DateTime";
import CustomScrollbars from "util/CustomScrollbars";

//const data = [];
const data = [
    {
        name: "Robert Brannon",
        note: "Lesser land heaven which above first.",
        datetime: "4/24/2019 15:26",
        avatar: require("assets/images/avatar/avatar01.png")
    },
    {
        name: "Leana Rosebell",
        note: "Lesser land heaven which above first. Lesser land heaven which above first.",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar03.png")
    }
];

class NewJobNotes extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }

  render() {
    const {intl: {formatMessage}} = this.props;
    return (
        <div className="gx-customer-tab gx-customer-activities-tab" >
            <div className="gx-ss-newjob-note-input">
                <div className="gx-customer-tab-header gx-text-grey" >
                    <i className="material-icons gx-mr-10">edit</i>
                    <input className="gx-customer-tab-input gx-border-0 gx-w-100" placeholder={formatMessage({id: 'customer.profile.notes.typenotes'})} />
                </div>
            </div>
            <div className="gx-customer-top-tab-scroll">
            
                <div className="gx-customer-tab-content gx-ss-newjob-note-content">                    
                    {data.length === 0 ?
                        <div className="gx-flex-row gx-justify-content-center gx-align-items-center gx-text-grey">
                            <div className="gx-text-center gx-mt-20">
                                <i className="material-icons gx-fs-xlxl gx-font-weight-medium gx-mb-2">block</i>
                                <div className="gx-fs-md gx-font-weight-medium"><IntlMessages id="customer.profile.notes.nonotes" /></div>
                            </div>
                        </div>     
                        :
                        <div>
                            { data.map((item, index) => (
                                <div key={index} className="gx-activity-list">
                                    <img alt="avatar" src={item.avatar} className="gx-avatar-img gx-size-30 gx-border-0 gx-mr-10"/>
                                    <div className="gx-activity-list-description">
                                        <div className="gx-flex-row"> 
                                            <div className="gx-activity-list-name">{item.name}</div>                           
                                            <div className="gx-activity-list-datetime">
                                                {changeDateFormat(item.datetime)}
                                            </div>
                                        </div>                
                                        <div className="gx-activity-list-note">{item.note}</div> 
                                    </div>
                                </div>
                            )) }
                        </div>  
                    }
                </div>
            </div>
        </div> 
    );
  }
};

export default injectIntl(NewJobNotes);
