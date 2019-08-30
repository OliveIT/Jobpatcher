import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag } from "antd";

import { injectIntl } from 'react-intl';
import IntlMessages from "util/IntlMessages";
import {changeDateFormat} from "util/DateTime";
import CustomScrollbars from "util/CustomScrollbars";
import Widget from "components/Widget";

class Tags extends Component {
    
    _element = React.createRef();
  state = {
      tags: [
        "Residential", 
        "Facebook ad"
      ]
  };

  constructor(props, context) {
    super(props, context);

  }

  onAddTagChanged(evt) {
    if(evt.key === 'Enter'){
        if( evt.target.value != '' ) {
            var tags = this.state.tags;
            tags.push(evt.target.value);
            this.setState({tags: tags});

            this._element.current.value = "";
        }
    }
  }

  render() {
    const {intl: {formatMessage}} = this.props;
    return (
        <div className="gx-customer-tab gx-customer-activities-tab" >
            <div className="gx-customer-tab-header gx-text-grey" >
                <i className="material-icons gx-mr-10">edit</i>
                <input className="gx-customer-tab-input gx-border-0 gx-w-100" 
                        placeholder={formatMessage({id: 'customer.profile.tags.addtag'})} 
                        onKeyPress={this.onAddTagChanged.bind(this)}
                        ref={this._element} />
            </div>
            <div className="gx-customer-top-tab-scroll">
            
                <div className="gx-customer-tab-content"> 
                    <div className="gx-flex-row">
                        { this.state.tags.map((item, index) => (
                            <div className="gx-customer-tab-tag gx-flex-row gx-flex-nowrap gx-align-items-center gx-mr-2 gx-mb-10">
                                <div className="gx-border-round gx-size-8 gx-mr-2" style={{backgroundColor: '#a5abb5'}}></div>
                                <div>{item}</div>
                            </div>
                        )) }
                    </div>  
                </div>
            </div>
        </div> 
    );
  }
};

export default injectIntl(Tags);
