import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag, Select } from "antd";
import { injectIntl } from 'react-intl';

import SearchBox from "components/SearchBox";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import ButtonGroup from "antd/lib/button/button-group";
import Widget from "components/Widget";

const Option = Select.Option;

const data = [
{
    id: 1,
    estimate_id: '#00624',    
    customer: 
    {
        avatar: require('assets/images/avatar/avatar02.png'),
        name: 'Mark Zoddila'
    },
    issue_date: '22/05/2019',
    due_date: '22/05/2019',
    amount: 250.00,
    status: 0
},
{
    id: 2,
    estimate_id: '#00542',
    customer:
    {
        avatar: require('assets/images/avatar/avatar03.png'),
        name: 'Peter Jackson'
    },
    issue_date: '20/05/2019',
    due_date: '20/05/2019',
    amount: 450.00,    
    status: 1
}
];

const estimate_status = [
    {
        icon: "check",
        color: "#b0e5bc",
        text: "Accepted"
    },
    {
        icon: "warning",
        color: "#fbbbbb",
        text: "Refused"
    },
]


class Estimates extends Component {
    
  state = {
    searchText: ''
  };

  constructor(props, context) {
    super(props, context);

  }

  updateSearch () {

  }

  render() {
    const {intl: {formatMessage}} = this.props;
    return (
        <div className="gx-main-content">            
            <div className="gx-customer-profile-tab-panel-content">
                <div className="gx-flex-row gx-w-100 gx-justify-content-between gx-align-items-center" style={{height: '58px'}}>     
                    <div className="gx-fs-md gx-font-weight-semi-bold gx-d-none gx-d-lg-block">                
                        <div className="gx-flex-row  gx-align-items-center">    
                            <IntlMessages id="customer.job.panel.estimates.subt" values={{ value: data.length }} />
                        </div>                    
                    </div>
                    <div className="gx-flex-row">                 
                        <span className="gx-d-none gx-d-lg-block">
                            <SearchBox styleName="gx-lt-icon-search-bar-lg gx-customer-search"
                                placeholder={formatMessage({id: 'customer.job.panel.estimates.searchjobs'})}
                                onChange={this.updateSearch.bind(this)}
                                value={this.state.searchText}/>
                        </span>
                        <span className="gx-d-none gx-d-lg-block gx-ml-10">
                            <Button className="gx-tool-btn gx-mb-0" type="default">
                                <i className="material-icons">print</i>
                            </Button>
                        </span>
                    </div>
                    <div className="gx-d-lg-none gx-w-100">
                        <SearchBox styleName="gx-lt-icon-search-bar-lg gx-customer-search gx-w-100"
                                    placeholder={formatMessage({id: 'customer.job.panel.estimates.searchjobs'})}
                                    onChange={this.updateSearch.bind(this)}
                                    value={this.state.searchText}/>
                    </div>
                </div>
                <Widget styleName="gx-card-full gx-customer-widget gx-customer-panel-table-widget">
                    <table className="gx-profile-table gx-customer-panel-table">
                        <thead>
                            <tr>
                                <th><IntlMessages id="customer.job.panel.estimates.th.jobid"/></th>
                                <th><IntlMessages id="customer.job.panel.estimates.th.customer"/></th>
                                <th><IntlMessages id="customer.job.panel.estimates.th.issuedate"/></th>
                                <th><IntlMessages id="customer.job.panel.estimates.th.duedate"/></th>
                                <th><IntlMessages id="customer.job.panel.estimates.th.amount"/></th>
                                <th><IntlMessages id="customer.job.panel.estimates.th.status"/></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                data.map( (item, index) => 
                                    <tr>
                                        <td>
                                            <Link to="/">{ item.estimate_id }</Link>                                            
                                        </td>
                                        <td>                                            
                                            <Avatar src={item.customer.avatar} className="gx-size-24 gx-mr-2" />
                                            <Link to="/">{ item.customer.name }</Link>                                               
                                        </td>
                                        <td>                                            
                                            {item.issue_date}
                                        </td>
                                        <td>                                            
                                            {item.due_date}
                                        </td>
                                        <td>
                                            ${ item.amount }
                                        </td>
                                        <td>
                                            <Select className="gx-customer-profile-panel-combobox" defaultValue={item.status} style={{width: '150px'}}
                                                    suffixIcon={<i className="gx-combo-icon material-icons">expand_more</i>}>
                                                {
                                                    estimate_status.map((status, idx) =>
                                                        <Option value={idx}>
                                                            <Avatar className="gx-size-24 gx-mr-2" style={{ backgroundColor: status.color}}>
                                                                <i className="gx-fs-md gx-font-weight-medium material-icons" style={{verticalAlign: 'middle'}}>{status.icon}</i>
                                                            </Avatar>                                                            
                                                            { status.text }
                                                        </Option>
                                                    )
                                                }
                                            </Select>
                                            
                                        </td>                                        
                                        <td className="gx-text-right">
                                            <i className="material-icons gx-pointer gx-text-grey">more_vert</i>                                            
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </Widget>
            </div>
        </div>
    );
  }
};

export default injectIntl(Estimates);
