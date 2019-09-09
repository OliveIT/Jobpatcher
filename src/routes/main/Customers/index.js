import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag, Popover, Modal} from "antd";
import { injectIntl } from 'react-intl';
import SearchBox from "components/SearchBox";

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import Widget from "components/Widget";
import {Link} from "react-router-dom";
import ButtonGroup from "antd/lib/button/button-group";
import EditCustomerDlg from "./CustomerDialog/EditCustomerDlg";
import ImportCustomerDlg from "./CustomerDialog/ImportCustomerDlg";

import {Notification} from "components/Notification";

import {TAB_SIZE, MOBILE_SIZE} from "../../../constants/ThemeSetting";
import {connect} from "react-redux";

const data = [
    {
        id: 1,
        avatar: 'person',
        name: 'Robert Brannon',
        info1: 'Commercial',
        info2: 'Quebec',
        info3: '2+',
        phone: '+1(705)-255-8504',
        email: 'robert@website.com',
        lastjob: '#000524',
        lastjob_date: '05/04/2019',
    },
    {
        id: 2,
        avatar: 'person',
        name: 'Victor Bullberg',
        info1: 'Residential',
        info2: 'Quebec',
        info3: '2+',
        phone: '+1(705)-567-3345',
        email: 'victor@website.com',
        lastjob: '#000526',
        lastjob_date: '05/04/2019',
    },
    {
        id: 3,
        avatar: 'business',
        name: 'Pro Cleaners',
        info1: 'Commercial',
        info2: 'Quebec',
        info3: '3+',
        phone: '+1(705)-892-0463',
        email: 'contact@website.com',
        lastjob: '#000524',
        lastjob_date: '05/04/2019',
    }
];

class Customers extends Component {
    
  state = {
    searchText: '',
    customer_status: [],
    customerNewDlgVisible: false,
    customerEditDlgVisible: false,
    customerImportDlgVisible: false,
    customer: {}
  };

  constructor(props, context) {
    super(props, context);

    var status = [];
    data.map( customer => {
        status[customer.id] = {
            checked: false,
            starred: false
        };
    } );

    this.state.customer_status = status;
  }

  onChangeAllCheck = (evt) => {
    var status = this.state.customer_status;
    status.map( customer => {
        customer.checked = evt.target.checked;
    } );
    
    this.setState({customer_status: status});
  }

  showNewCustomerDlg = () => {
      this.setState({customerNewDlgVisible: true,
                    customerImportDlgVisible: false});
  }

  showEditCustomerDlg = (customer) => {
    this.setState({ customer: customer,
            customerEditDlgVisible: true});
  }

  showImportCustomerDlg = () => {
    this.setState({ 
        customerNewDlgVisible: false,
        customerImportDlgVisible: true});
  }

  onSaveCustomer = () => {
    this.setState({customerNewDlgVisible: false});
  }

  onUpdateCustomer = () => {
    this.setState({customerEditDlgVisible: false});
  }

  onCancel = () => {
    this.setState({customerNewDlgVisible: false,
                    customerEditDlgVisible: false,
                    customerImportDlgVisible: false});
  }

  onChangeCustomerCheck = (customer_id) => {
      var status = this.state.customer_status;
      status[customer_id].checked = !status[customer_id].checked;
      this.setState( {customer_status: status} );
  }

  onChangeCustomerStar = (customer_id) => {
      console.log(customer_id);
    var status = this.state.customer_status;
    status[customer_id].starred = !status[customer_id].starred;
    this.setState( {customer_status: status} );
  }

  updateSearchCustomers = (evt) => {
    this.setState({
      searchText: evt.target.value
    });
  };

  showNotification = () => {
    Notification("info", "You got a new chat message from Robert!", 0);
    Notification("success", "Invoice #00534 is paid by Peter Goldberg", 0);
    Notification("warning", "Trial is ended! Please upgrade to continue", 0);
  }

  render() {
    const {width, intl: {formatMessage}} = this.props;
    return (
        <Auxiliary>
            <div className="gx-main-content-container">
                <div className="gx-sub-title-container gx-flex-row gx-flex-nowrap gx-w-100 gx-justify-content-between gx-align-items-center gx-ss-customers-top-toolbar">
                    <div className="gx-sub-title">                
                        {data.length} <IntlMessages id="customers"/>
                    </div>
                    <div className="gx-flex-row gx-flex-nowrap gx-ss-tool">                
                        <span>
                            <SearchBox styleName="gx-lt-icon-search-bar-lg gx-customer-search"
                                placeholder={formatMessage({id:"customer.search.placeholder"})}
                                onChange={this.updateSearchCustomers.bind(this)}
                                value={this.state.searchText}/>
                        </span>
                        {/* <span className="gx-d-none gx-d-md-block gx-ml-10"> */}
                        <span className="gx-d-md-block gx-ml-10">
                            <Button className="gx-nav-btn gx-nav-customer-btn gx-mb-0" type="primary" onClick={this.showNewCustomerDlg.bind(this)}>
                                <div className="gx-div-align-center">
                                    <i className="material-icons gx-fs-xl gx-mr-2">add</i>
                                    <IntlMessages id="customer.newcustomer"/>
                                </div>
                            </Button>
                        </span>
                    </div>
                </div>

                <Widget styleName="gx-card-full gx-customer-widget gx-mb-0 gx-no-bottom-radius">
                    <table className="gx-customer-table">
                        <thead>
                            <tr>
                                <th style={{minWidth: '90px', width: '90px'}} >
                                    <div className="gx-customer-check-main">
                                        <Checkbox onChange={this.onChangeAllCheck.bind(this)} />
                                    </div>
                                </th>
                                <th className="gx-th-name"><IntlMessages id="customer.th.name"/></th>
                                <th className="gx-th-phone"><IntlMessages id="customer.th.phone"/></th>
                                <th className="gx-th-email"><IntlMessages id="customer.th.email"/></th>
                                <th className="gx-th-lastjob"><IntlMessages id="customer.th.lastjob"/></th>
                                <th className="gx-th-action"></th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                data.map( customer => 
                                    <tr>
                                        <td>
                                            <div className="gx-flex-row gx-flex-nowrap gx-align-items-center">
                                                <Checkbox checked={ this.state.customer_status[customer.id].checked} 
                                                        onClick={() => { this.onChangeCustomerCheck(customer.id) } }/>
                                                <i className="material-icons gx-ml-10" style={{cursor: 'pointer', 
                                                            color: this.state.customer_status[customer.id].starred ? '#f7c43d' : '#dcdde5' }} 
                                                        onClick={() => { this.onChangeCustomerStar(customer.id) } }>
                                                    {this.state.customer_status[customer.id].starred ? "star" : "star_border"}
                                                </i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="gx-flex-row gx-flex-nowrap gx-align-items-center">
                                                <div className="gx-flex-0 gx-main-avatar gx-size-32 gx-mr-12">
                                                    <i className="material-icons gx-w-100 gx-text-center" style={{color: '#fbfbfd', fontSize: '20px' }}>{customer.avatar}</i>                                            
                                                </div>
                                                <Link to="/main/customers/profile" className="gx-text-medium gx-fs-13-20 gx-mr-12">{ customer.name }</Link>
                                                <Tag className="gx-customer-list-tag">{customer.info1}</Tag>
                                                <Tag className="gx-customer-list-tag">{customer.info2}</Tag>
                                                <Tag className="gx-customer-list-tag">{customer.info3}</Tag>
                                            </div>
                                        </td>
                                        <td className="gx-th-phone">
                                            { customer.phone }
                                        </td>
                                        <td className="gx-th-email">
                                            { customer.email }
                                        </td>
                                        <td className="gx-th-lastjob">
                                            <Link to="/">{ customer.lastjob }</Link> ({customer.lastjob_date})                                        
                                        </td>
                                        <td className="gx-text-right">
                                            <div className="gx-d-none gx-d-md-block">
                                                <ButtonGroup className="gx-customer-list-buttongroup">
                                                    <Button onClick={() => { this.showNotification() }}><i className="material-icons">sms</i></Button>
                                                    <Button onClick={() => { this.showEditCustomerDlg( customer ) }}><i className="material-icons">build</i></Button>
                                                    <Button><i className="material-icons">assignment_turned_in</i></Button>
                                                    <Popover content={
                                                        <div style={{padding: '8px 4px', color: '#a5abb5'}}>
                                                            <div className="gx-flex-row gx-flex-nowrap gx-align-items-center gx-mb-3 gx-pointer">
                                                                <i className="material-icons gx-fs-xl gx-mr-10">edit</i>
                                                                <div className="gx-fs-13-20 gx-font-weight-medium">
                                                                    <IntlMessages id="customer.list.pop.editcustomer"/>
                                                                </div>
                                                            </div>
                                                            <div className="gx-flex-row gx-flex-nowrap gx-align-items-center gx-pointer">
                                                                <i className="material-icons gx-fs-xl gx-mr-10">delete</i>
                                                                <div className="gx-fs-13-20 gx-font-weight-medium">
                                                                    <IntlMessages id="customer.list.pop.deletecustomer"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    } placement="bottom" trigger="click">
                                                        <Button><i className="material-icons">more_horiz</i></Button>
                                                    </Popover>                                            
                                                </ButtonGroup>
                                                <Button className="gx-customized-button gx-customized-text-button gx-ml-10"><IntlMessages id="customer.td.view"/></Button>
                                            </div>
                                            <div className="gx-d-md-none">
                                                <i className="material-icons gx-pointer gx-text-grey">more_vert</i>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                            <tr>
                                
                            </tr>
                        </tbody>
                    </table>
                </Widget>

                
                <Modal className="gx-ss-customers-new-modal" 
                    title={ 
                        <div className="gx-flex-row gx-w-100 gx-justify-content-between gx-align-items-center" >
                            <div className="gx-customized-modal-title">Add new customer</div>
                            <div className="gx-flex-row gx-flex-nowrap gx-align-items-center">                            
                                <Button className="gx-customized-button gx-d-none gx-d-md-block notDisplayOnMobile" onClick={() => {this.showImportCustomerDlg()}}>
                                    <div className="gx-div-align-center">
                                        <i className="material-icons gx-fs-xl gx-mr-2" style={{marginLeft: '-6px'}}>publish</i>
                                        <IntlMessages id="customer.customerdlg.importcontacts"/>
                                    </div>
                                </Button>
                                <Button className="gx-customized-button gx-d-md-none notDisplayOnMobile" onClick={() => {this.showImportCustomerDlg()}}>
                                    <div className="gx-div-align-center">
                                        <i className="material-icons gx-fs-xl gx-mr-2" style={{marginLeft: '-6px'}}>publish</i>
                                        <IntlMessages id="customer.customerdlg.import"/>
                                    </div>
                                </Button>                                
                                <i className="material-icons gx-customized-modal-close" onClick={this.onCancel.bind(this)}>clear</i>
                            </div>
                        </div>
                    }
                    closable={false}
                    wrapClassName="gx-customized-modal vertical-center-modal"
                    visible={this.state.customerNewDlgVisible}
                    onCancel={this.onCancel.bind(this)}
                    // width={ width >= 1144 ? 1084 : width - 60 }
                    width = {
                        width >= 1144 &&
                            1084
                        || width >= 500 &&
                            width - 60
                        || width - 30
                    }
                >
                    <EditCustomerDlg onCancel={this.onCancel.bind(this)} onSave={this.onSaveCustomer.bind(this)}/>
                </Modal>

                <Modal
                    title={ 
                        <div className="gx-flex-row gx-w-100 gx-justify-content-between gx-align-items-center"  >
                            <div className="gx-customized-modal-title"><IntlMessages id="customer.customerdlg.editcustomer"/></div>
                            <div>
                                <i className="material-icons gx-customized-modal-close" onClick={this.onCancel.bind(this)}>clear</i>
                            </div>
                        </div>
                    }
                    closable={false}
                    wrapClassName="gx-customized-modal vertical-center-modal"
                    visible={this.state.customerEditDlgVisible}
                    onCancel={this.onCancel.bind(this)}
                    width={ width >= 1144 ? 1084 : width - 60 }
                >
                    <EditCustomerDlg onCancel={this.onCancel.bind(this)} onSave={this.onUpdateCustomer.bind(this)} data={this.state.customer}/>
                </Modal>

                <Modal
                    title={ 
                        <div className="gx-flex-row gx-w-100 gx-justify-content-between gx-align-items-center" >
                            <div className="gx-customized-modal-title"><IntlMessages id="customer.customerdlg.importcustomers"/></div>
                            <div className="gx-flex-row gx-flex-nowrap gx-align-items-center">                            
                                <Button className="gx-customized-button gx-d-none gx-d-md-block" onClick={() => {this.showNewCustomerDlg()}}>
                                    <div className="gx-div-align-center">
                                        <i className="material-icons gx-fs-xl gx-mr-2" style={{marginLeft: '-6px'}}>publish</i>
                                        <IntlMessages id="customer.customerdlg.addmanually"/>
                                    </div>
                                </Button>
                                <i className="material-icons gx-customized-modal-close" onClick={this.onCancel.bind(this)}>clear</i>
                            </div>
                        </div>
                    }
                    closable={false}
                    wrapClassName="gx-customized-modal vertical-center-modal"
                    visible={this.state.customerImportDlgVisible}
                    onCancel={this.onCancel.bind(this)}
                    width={ width >= TAB_SIZE ? 830 : width >= MOBILE_SIZE ? 710 : width - 40 }
                >
                    <ImportCustomerDlg onCancel={this.onCancel.bind(this)} onSave={this.onSaveCustomer.bind(this)}/>
                </Modal>
            </div>
        </Auxiliary>
    );
  }
};

const mapStateToProps = ({settings}) => {
    const {locale, navStyle, navCollapsed, width, currentPage} = settings;
    return {locale, navStyle, navCollapsed, width, currentPage}
};

export default connect(mapStateToProps) ( injectIntl(Customers) );
