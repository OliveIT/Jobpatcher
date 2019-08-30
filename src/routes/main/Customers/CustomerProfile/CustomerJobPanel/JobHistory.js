import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag, Select } from "antd";
import { injectIntl } from 'react-intl';

import SearchBox from "components/SearchBox";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import ButtonGroup from "antd/lib/button/button-group";
import {changeDateFormat} from 'util/DateTime';
import Widget from "components/Widget";

const Option = Select.Option;

const data = [
{
    id: 1,
    job_id: '#00624',
    workers: [
        {
            avatar: require('assets/images/avatar/avatar05.png'),
            name: 'Peter Windberg'
        },
        {
            avatar: require('assets/images/avatar/avatar06.png'),
            name: 'Peter Windberg 2'
        }
    ],
    scheduled: '4/24/2019 15:30',    
    job_status: 'Completed',
    amount: 250.00,

},
{
    id: 2,
    job_id: '#00542',
    workers: [
        {
            avatar: require('assets/images/avatar/avatar06.png'),
            name: 'Romana Rosebel'
        },
        {
            avatar: require('assets/images/avatar/avatar06.png'),
            name: 'Romana Rosebel 2'
        }
    ],
    scheduled: '4/24/2019 15:30',    
    job_status: 'Completed',
    amount: 450.00,    
}
];


class JobHistory extends Component {
    
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
                        <div className="gx-flex-row  gx-align-items-center gx-text-uppercase">    
                            <IntlMessages id="customer.job.panel.jobhistory.subt" values={{ value: data.length }} />
                        </div>                    
                    </div>
                    <div className="gx-flex-row">                 
                        <span className="gx-d-none gx-d-lg-block">
                            <SearchBox styleName="gx-lt-icon-search-bar-lg gx-customer-search"
                                placeholder={formatMessage({id: 'customer.job.panel.jobhistory.searchjobs'})}
                                onChange={this.updateSearch.bind(this)}
                                value={this.state.searchText}/>
                        </span>
                        <span className="gx-d-none gx-d-lg-block gx-ml-10" >
                            <Button className="gx-tool-btn gx-mb-0" type="default">
                                <i className="material-icons">print</i>
                            </Button>
                        </span>
                    </div>       
                    <div className="gx-d-lg-none gx-w-100">
                        <SearchBox styleName="gx-lt-icon-search-bar-lg gx-customer-search gx-w-100"
                                    placeholder={formatMessage({id: 'customer.job.panel.jobhistory.searchjobs'})}
                                    onChange={this.updateSearch.bind(this)}
                                    value={this.state.searchText}/>
                    </div>
                </div>
                <Widget styleName="gx-card-full gx-customer-widget gx-customer-panel-table-widget">
                    <table className="gx-profile-table gx-customer-panel-table">
                        <thead>
                            <tr>
                                <th><IntlMessages id="customer.job.panel.jobhistory.th.jobid"/></th>
                                <th><IntlMessages id="customer.job.panel.jobhistory.th.assigned"/></th>
                                <th><IntlMessages id="customer.job.panel.jobhistory.th.scheduled"/></th>
                                <th><IntlMessages id="customer.job.panel.jobhistory.th.jobstatus"/></th>
                                <th><IntlMessages id="customer.job.panel.jobhistory.th.amount"/></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                data.map( (item, index) => 
                                    <tr>
                                        <td>
                                            <Link to="/">{ item.job_id }</Link>                                            
                                        </td>
                                        <td>
                                            <Select className="gx-customer-profile-panel-combobox" defaultValue={0} 
                                                    suffixIcon={<i className="gx-combo-icon material-icons">expand_more</i>}>
                                                {
                                                    item.workers.map((worker, idx) =>
                                                        <Option key={idx} value={idx}>
                                                            <Avatar src={worker.avatar} className="gx-size-24 gx-mr-2" />
                                                            { worker.name }
                                                        </Option>
                                                    )
                                                }
                                            </Select>
                                            
                                        </td>
                                        <td>
                                            { changeDateFormat(item.scheduled) }
                                        </td>
                                        <td>
                                            <div className="gx-flex-row gx-align-items-center">
                                                { item.job_status === "Completed" ? 
                                                    <i className="material-icons gx-text-success gx-fs-xl">check_circle_outline</i> :
                                                    <i className="material-icons"></i>
                                                }
                                                <div className="gx-ml-2">
                                                    { item.job_status }
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            ${ item.amount }
                                        </td>
                                        <td className="gx-text-right">
                                            <Button className="gx-customized-button gx-customized-text-button"><IntlMessages id="customer.td.view"/></Button>
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

export default injectIntl(JobHistory);
