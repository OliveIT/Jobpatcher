import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag, Select } from "antd";
import { injectIntl } from 'react-intl';

import SearchBox from "components/SearchBox";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import FormInput from "components/Form/FormInput";
import Widget from "components/Widget";

const Option = Select.Option;

class JobInvoice extends Component {
    
  state = {
    searchText: ''
  };

  constructor(props, context) {
    super(props, context);

  }

  updateSearch () {

  }

  render() {
    const {data, intl: {formatMessage}} = this.props;
    return (
        <div className="gx-main-content">            
            <div className="gx-customer-profile-tab-panel-content">
                <div className="gx-flex-row gx-w-100 gx-justify-content-between gx-align-items-center" style={{height: '58px'}}>                
                    <div className="gx-fs-md gx-font-weight-semi-bold">                
                        <h5 className="gx-text-uppercase">    
                            <IntlMessages id="job.invoice.subt"/>
                            <Link to="#" className="gx-ml-2">{data.job_id}</Link>
                        </h5>                    
                    </div>
                    <div className="gx-flex-row">                 
                        <Button className="gx-tool-btn gx-m-0 gx-py-0" type="default">
                            <div className="gx-div-align-center">
                                <i className="material-icons gx-mr-2">send</i>
                                <span><IntlMessages id="send"/></span>
                            </div>
                        </Button>
                        <Button className="gx-tool-btn gx-mb-0 gx-ml-10" type="default">
                            <i className="material-icons">print</i>
                        </Button>
                    </div>
                </div>
                <Widget styleName="gx-card-full gx-customer-widget gx-mb-20">
                    <table className="gx-profile-table gx-job-invoice-panel-table">
                        <thead>
                            <tr>
                                <th><IntlMessages id="job.invoice.th.no"/></th>
                                <th><IntlMessages id="job.invoice.th.service"/></th>
                                <th><IntlMessages id="job.invoice.th.qty"/></th>
                                <th><IntlMessages id="job.invoice.th.rate"/></th>
                                <th><IntlMessages id="job.invoice.th.tax"/></th>
                                <th><IntlMessages id="job.invoice.th.amount"/></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.invoices.map( (invoice, index) => (
                              <tr>
                                <td className="gx-text-center"> {index + 1} </td>
                                <td> 
                                    {invoice.service} 
                                    <div className="gx-fs-sm gx-font-weight-normal gx-text-grey">
                                        {invoice.detail}
                                    </div>
                                </td>
                                <td> {invoice.QTY} </td>
                                <td> ${invoice.rate} </td>
                                <td> {invoice.tax}% </td>
                                <td> ${invoice.amount} </td>
                                <td className="gx-text-center"> <i className="material-icons gx-pointer gx-text-grey">more_vert</i> </td>
                              </tr>  
                            ))}  
                            <tr className="gx-job-invoice-panel-table-last-row">
                                <td></td>
                                <td> 
                                    <FormInput className="gx-mb-10" placeholder={formatMessage({id: "job.invoice.itemname.placeholder"})}/>
                                    <FormInput className="gx-mb-0" placeholder={formatMessage({id: "job.invoice.desc.placeholder"})}/>
                                </td>
                                <td> <FormInput type="number" placeholder={formatMessage({id: "job.invoice.qty.placeholder"})}/> </td>
                                <td> <FormInput type="number" placeholder={formatMessage({id: "job.invoice.rate.placeholder"})}/> </td>
                                <td> 
                                    <FormInput type="number" className="gx-mb-10" placeholder={formatMessage({id: "job.invoice.tax.placeholder"})}/>
                                    <Button className="gx-w-100 gx-mb-0 gx-btn-grey">
                                        <IntlMessages id="cancel"/>
                                    </Button>
                                </td>
                                <td>
                                    <FormInput type="number" className="gx-mb-10" placeholder={formatMessage({id: "job.invoice.amount.placeholder"})}/> 
                                    <Button className="gx-w-100 gx-mb-0" type="primary">
                                        <IntlMessages id="add"/>
                                    </Button>
                                </td>
                                <td> </td>
                            </tr>                          
                        </tbody>
                    </table>
                </Widget>

                <div className="gx-flex-row gx-justify-content-between">
                    <Button className="gx-mb-0" type="primary" >
                        <div className="gx-div-align-center">
                            <i className="material-icons gx-mr-2">add</i>
                            <div><IntlMessages id="job.invoice.newservice"/></div>
                        </div>
                    </Button>
                    <div className="gx-mb-20">
                        <table className="gx-job-invoice-panel-sub-table">
                            <tr>
                                <td>Sub total</td>
                                <td>$240.00</td>
                            </tr>
                            <tr>
                                <td>Tax (4.5%)</td>
                                <td>$11.00</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};

export default injectIntl(JobInvoice);
