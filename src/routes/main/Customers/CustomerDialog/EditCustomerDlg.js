import React, {Component} from "react";
import {Button, Checkbox, Avatar, Row, Col, Select, Input, Switch, Icon } from "antd";

import {GoogleMap, withGoogleMap} from "react-google-maps";

import { injectIntl } from 'react-intl';
import { Countries } from "util/Countries";
import IntlMessages from "util/IntlMessages";

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{lat: 47.646935, lng: -122.303763}}
    />
));

const Option = Select.Option;

class EditCustomerDlg extends Component {
    static defaultProps = {
        data: {
            name: "",
            info1: ""
        }
    }

  constructor(props, context) {
    super(props, context);    
    
    this.state = {
        isCommercial: false,
        isResidential: false,
        title: "",
        firstname: "",
        midlename: "",
        lastname: "",
        displayname: "",
        companyname: "",
        email: "",
        mobile: "",
        fax: "",
        workphone: "",
        website: "",
        phone: "",
        address: "",
        street: "",
        city: "",
        state: "",
        postalcode: "",
        zip: "",
        notes: [],
        tags: [],
        type: ""
    };

    this.updateStatWithProps = this.updateStatWithProps.bind(this);
  }

  updateStatWithProps (props) {
        if( props.data.info1 === "Commercial" ) {
            this.setState({isCommercial: true, isResidential: false});
        } else if( props.data.info1 === "Residential" ) {
            this.setState({isCommercial: false, isResidential: true});
        } else {
            this.setState({isCommercial: false, isResidential: false});
        }

        this.setState({
            firstname: props.data.name,
            type: props.data.info1
        });
  }

  componentWillMount() {
        this.updateStatWithProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
        this.updateStatWithProps(nextProps);
  }

  Buttons () {
    const {onCancel, onSave, data} = this.props;
      return (
        <div className="gx-flex-row gx-flex-nowrap">
            <Button className="gx-edit-customer-dlg-btn " 
                    style={{color: 'white', backgroundColor: '#a5abb5', border: 'none'}} 
                    onClick={onCancel}><IntlMessages id="cancel"/></Button>
            {data.name === "" &&
                <Button className="gx-edit-customer-dlg-btn" type="primary"
                    onClick={onSave}><IntlMessages id="save"/></Button>
            }
            {data.name !== "" &&
                <Button className="gx-edit-customer-dlg-btn" type="primary"
                    onClick={onSave}><IntlMessages id="update"/></Button>
            }
        </div>
      );
  }

  onAddNotePressed(evt) {
    if(evt.key === 'Enter'){
        if( evt.target.value != '' ) {
            var notes = this.state.notes;
            notes.push(evt.target.value);
            this.setState({notes: notes});
            evt.target.value = "";
        }
    }
  }

  onAddTagPressed(evt) {
    if(evt.key === 'Enter'){
        if( evt.target.value != '' ) {
            var tags = this.state.tags;
            tags.push(evt.target.value);
            this.setState({tags: tags});
            evt.target.value = "";
        }
    }
  }
  
  render() {    
    const {intl: {formatMessage}} = this.props;
    const { title, firstname, midlename, lastname, displayname,  companyname, email, mobile, workphone, phone, fax, website, street, postalcode,  
                address, city, state, zip, notes, tags, type } = this.state;

    return (
        <div className="gx-edit-customer-dlg" >             
            <div className="gx-customized-modal-content"> 
            
                <div className="gx-customized-modal-content-block">
                    <div className="gx-customized-modal-content-title">
                        <i className="material-icons">account_circle</i>
                        <IntlMessages id="customer.customerdlg.content.customerdetails"/>
                    </div>

                    <Row>
                        <Col span={12}>
                            <Row>
                                <Col span={4} style={{paddingRight: '0px'}}>
                                <div className="gx-customized-modal-content-field">
                                    <div className="gx-customized-modal-content-field-title">
                                        <IntlMessages id="customer.customerdlg.content.title"/>
                                    </div>
                                    <div>
                                        <Input
                                            value={title}
                                            onChange={(event) => { this.setState({title: event.target.value})}}/>
                                    </div>
                                </div>
                                </Col>
                                <Col span={7} style={{paddingRight: '0px'}}>
                                <div className="gx-customized-modal-content-field">
                                    <div className="gx-customized-modal-content-field-title">
                                        <IntlMessages id="customer.customerdlg.content.firstname"/>
                                    </div>
                                    <div>
                                        <Input 
                                            value={firstname}
                                            onChange={(event) => { this.setState({firstname: event.target.value})}}/>
                                    </div>
                                </div>
                                </Col>
                                <Col span={6} style={{paddingRight: '0px'}}>
                                <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.midlename"/>
                                </div>
                                <div>
                                    <Input
                                    value={midlename}
                                    onChange={(event) => { this.setState({midlename: event.target.value})}} />
                                </div>
                            </div>
                                </Col>
                                <Col span={7} >
                                <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.lastname"/>
                                </div>
                                <div>
                                    <Input
                                    value={lastname}
                                    onChange={(event) => { this.setState({lastname: event.target.value})}} />
                                </div>
                            </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                        <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.email"/>
                                </div>
                                <div>
                                    <Input
                                     
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.emailholder'})} 
                                            value={email}
                                            onChange={(event) => { this.setState({email: event.target.value})}} />
                                </div>
                            </div>  
                        </Col>
                    </Row>
{/* first row end */}
                <Row>
                    <Col span={12}>
                    <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.companyname"/>
                                </div>
                                <div>
                                    <Input 
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.companynameholder'})} 
                                            value={companyname}
                                            onChange={(event) => { this.setState({companyname: event.target.value})}} />
                                </div>
                            </div>  
                        </Col>
                    
                    <Col span={12}>
                        <Row>
                            <Col span={12} style={{paddingRight: '0px'}}>
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.phone"/>
                                </div>
                                <div>
                                    <Input 
                                    value={phone}
                                    onChange={(event) => { this.setState({phone: event.target.value})}} />
                                </div>
                            </div>
                            </Col>

                            <Col span={12}>
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.mobile"/>
                                </div>
                                <div>
                                    <Input
                                            value={mobile}
                                            onChange={(event) => { this.setState({mobile: event.target.value})}} />
                                </div>
                            </div>  
                            </Col>
                        </Row>
                    </Col>
                        
                    </Row>
{/* secound row end */}
        <Row>
                    <Col span={12}>
                    <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.displayname"/>
                                </div>
                                <div>
                                    <Input 
                                        value={displayname}
                                        onChange={(event) => { this.setState({displayname: event.target.value})}} />
                                </div>
                            </div>
                        </Col>
                    
                    <Col span={12}>
                        <Row>
                            <Col span={12} style={{paddingRight: '0px'}}>
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.fax"/>
                                </div>
                                <div>
                                    <Input 
                                    value={fax}
                                    onChange={(event) => { this.setState({fax: event.target.value})}} />
                                </div>
                            </div>
                            </Col>

                            <Col span={12}>
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.website"/>
                                </div>
                                <div>
                                    <Input
                                            value={website}
                                            onChange={(event) => { this.setState({website: event.target.value})}} />
                                </div>
                            </div>  
                            </Col>
                        </Row>
                    </Col>
                        
                    </Row>

{/* third row end */}
<div style={{
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '41px',
    backgroundColor: '#2B4773',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    marginBottom: '20px'
}}>
<div style={{ padding: '10px 10px 10px 10px',
    color: '#FFFF'}}><IntlMessages id="customer.customerdlg.content.address"/></div>
<div style={{ padding: '10px 10px 10px 10px',
    color: '#FFFF'}}><IntlMessages id="customer.customerdlg.content.payment"/></div>
<div style={{ padding: '10px 10px 10px 10px',
    color: '#FFFF'}}><IntlMessages id="customer.customerdlg.content.notes"/></div>
    <div style={{ padding: '10px 10px 10px 10px',
    color: '#FFFF'}}><IntlMessages id="customer.customerdlg.content.files"/></div>
    </div>

    <Row>
        <Col span={12}>
            <Row>
                <Col span={12}>
        <div className="gx-customized-modal-content-title">
            <i className="material-icons">location_on</i>
            <IntlMessages id="customer.customerdlg.content.customerlocation"/>
        </div>
                </Col>
                <Col span={12}>
            <a className="gx-customized-modal-content-title">
            <IntlMessages id="customer.customerdlg.content.anotheraddress"/>
        </a>
                </Col>
            </Row>
        <Row><Col span={24}>
        <div className="gx-customized-modal-content-field">
                                        
                                        <div>
                                            <Input
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.street'})}
                                                    value={street}
                                                    onChange={(event) => { this.setState({street: event.target.value})}} />
                                        </div>
                                    </div>
            </Col>
            </Row>
            <Row>
                <Col span={12}>
                <div className="gx-customized-modal-content-field">
                                   
                                        <div>
                                            <Input
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.city'})}
                                                    value={city}
                                                    onChange={(event) => { this.setState({city: event.target.value})}} />
                                        </div>
                                    </div>
                </Col>
                <Col span={12}>
                <div className="gx-customized-modal-content-field">
                                        <div>
                                            <Input placeholder={formatMessage({id: "customer.customerdlg.content.state"})}
                                            value={state}
                                            onChange={(event) => { this.setState({state: event.target.value})}}
                                            />
                                        </div>
                                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                <div className="gx-customized-modal-content-field">
                                   
                                        <div>
                                            <Input
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.postalcode'})}
                                                    value={postalcode}
                                                    onChange={(event) => { this.setState({postalcode: event.target.value})}} />
                                        </div>
                                    </div>
                </Col>
                <Col span={12}>
                <div className="gx-customized-modal-content-field">
                                        <div>
                                            <Select style={{width: '100%'}}
                                                    placeholder={formatMessage({id: "customer.customerdlg.content.country"})}
                                                    suffixIcon={<i className="gx-combo-icon material-icons">expand_more</i>}>
                                                { Countries().map ( (country, index) => (
                                                    <Option key={index} value={index}>
                                                        {formatMessage({id: country})}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                </Col>
            </Row>
        
        </Col>
        <Col span={12}>
        <Row>
                <Col span={12}>
        <div className="gx-customized-modal-content-title">
        <Icon type="credit-card" />
            <IntlMessages id="customer.customerdlg.content.customerlocation"/>
        </div>
                </Col>
                <Col span={12}>
                <Switch size="small" defaultChecked />
            <IntlMessages id="customer.customerdlg.content.sameascustomeraddr"/>
                </Col>
            </Row>
            <Row><Col span={24}>
        <div className="gx-customized-modal-content-field">
                                        
                                        <div>
                                            <Input
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.street'})}
                                                    value={street}
                                                    onChange={(event) => { this.setState({street: event.target.value})}} />
                                        </div>
                                    </div>
            </Col>
            </Row>
            <Row>
                <Col span={12}>
                <div className="gx-customized-modal-content-field">
                                   
                                        <div>
                                            <Input
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.city'})}
                                                    value={city}
                                                    onChange={(event) => { this.setState({city: event.target.value})}} />
                                        </div>
                                    </div>
                </Col>
                <Col span={12}>
                <div className="gx-customized-modal-content-field">
                                        <div>
                                            <Input placeholder={formatMessage({id: "customer.customerdlg.content.state"})}
                                            value={state}
                                            onChange={(event) => { this.setState({state: event.target.value})}}
                                            />
                                        </div>
                                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                <div className="gx-customized-modal-content-field">
                                   
                                        <div>
                                            <Input
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.postalcode'})}
                                                    value={postalcode}
                                                    onChange={(event) => { this.setState({postalcode: event.target.value})}} />
                                        </div>
                                    </div>
                </Col>
                <Col span={12}>
                <div className="gx-customized-modal-content-field">
                                        <div>
                                            <Select style={{width: '100%'}}
                                                    placeholder={formatMessage({id: "customer.customerdlg.content.country"})}
                                                    suffixIcon={<i className="gx-combo-icon material-icons">expand_more</i>}>
                                                { Countries().map ( (country, index) => (
                                                    <Option key={index} value={index}>
                                                        {formatMessage({id: country})}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                </Col>
            </Row>

        </Col>
    </Row>

                    {/* <Row>
                        <Col lg={8} md={12} sm={24} xs={24}>  
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.firstname"/>
                                </div>
                                <div>
                                    <input className="gx-customized-modal-content-field-input" 
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.firstnameholder'})} 
                                            value={firstname}
                                            onChange={(event) => { this.setState({firstname: event.target.value})}} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12} sm={24} xs={24}>  
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.lastname"/>
                                </div>
                                <div>
                                    <input className="gx-customized-modal-content-field-input"  
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.lastnameholder'})}
                                            value={lastname}
                                            onChange={(event) => { this.setState({lastname: event.target.value})}} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12} sm={24} xs={24}>  
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.displayname"/>
                                </div>
                                <div>
                                    <input className="gx-customized-modal-content-field-input" 
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.displaynameholder'})} 
                                            value={displayname}
                                            onChange={(event) => { this.setState({displayname: event.target.value})}} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12} sm={24} xs={24}>
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.customertype"/>
                                </div>
                                <div className="gx-flex-row">
                                    <div className={ "gx-flex-row gx-flex-nowrap gx-align-items-center gx-customized-modal-content-field-btncheck" + 
                                                        (type === "Residential" ? " selected" : "") }
                                            onClick={()=> { this.setState({type: type !== "Residential" ? "Residential" : "Commercial"})}}>
                                        <div className="gx-customized-modal-content-field-btncheck-mark">A</div>
                                        <IntlMessages id="customer.customerdlg.content.customertype.residential"/>
                                    </div>
                                    <div className={ "gx-flex-row gx-flex-nowrap gx-align-items-center gx-customized-modal-content-field-btncheck" + 
                                                        (type === "Commercial" ? " selected" : "") }
                                            onClick={()=> { this.setState({type: type !== "Commercial" ? "Commercial" : "Residential"})}}>
                                        <div className="gx-customized-modal-content-field-btncheck-mark">B</div>
                                        <IntlMessages id="customer.customerdlg.content.customertype.commercial"/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12} sm={24} xs={24}>
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.companyname"/>
                                </div>
                                <div>
                                    <input className="gx-customized-modal-content-field-input" 
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.companynameholder'})} 
                                            value={companyname}
                                            onChange={(event) => { this.setState({companyname: event.target.value})}} />
                                </div>
                            </div>   
                        </Col>
                        <Col lg={8} md={12} sm={24} xs={24}>
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.email"/>
                                </div>
                                <div>
                                    <input className="gx-customized-modal-content-field-input" 
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.emailholder'})} 
                                            value={email}
                                            onChange={(event) => { this.setState({email: event.target.value})}} />
                                </div>
                            </div>   
                        </Col>
                        <Col lg={8} md={12} sm={24} xs={24}>
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.mobilephone"/>
                                </div>
                                <div>
                                    <input className="gx-customized-modal-content-field-input" 
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.mobilephoneholder'})} 
                                            value={mobilephone}
                                            onChange={(event) => { this.setState({mobilephone: event.target.value})}} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12} sm={24} xs={24}>
                            <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.workphone"/>
                                </div>
                                <div>
                                    <input className="gx-customized-modal-content-field-input" 
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.workphoneholder'})} 
                                            value={workphone}
                                            onChange={(event) => { this.setState({workphone: event.target.value})}} />
                                </div>
                            </div>   
                        </Col>
                        <Col lg={8} md={12} sm={24} xs={24}>
                            {/* <div className="gx-customized-modal-content-field">
                                <div className="gx-customized-modal-content-field-title">
                                    <IntlMessages id="customer.customerdlg.content.homephone"/>
                                </div>
                                <div>
                                    <input className="gx-customized-modal-content-field-input" 
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.homephoneholder'})} 
                                            value={homephone}
                                            onChange={(event) => { this.setState({homephone: event.target.value})}} />
                                </div>
                            </div>
                        </Col>
                    </Row> */}
                </div>

                {/* <div className="gx-customized-modal-content-block">
                    <div className="gx-customized-modal-content-title">
                        <i className="material-icons">location_on</i>
                        <IntlMessages id="customer.customerdlg.content.customerlocation"/>
                    </div>
                    <Row>
                        <Col lg={16} md={12} sm={24} xs={24}>  
                            <Row>
                                <Col lg={24} md={24} sm={24} xs={24}>  
                                    <div className="gx-customized-modal-content-field">
                                        <div className="gx-customized-modal-content-field-title">
                                            <IntlMessages id="customer.customerdlg.content.address"/>
                                        </div>
                                        <div>
                                            <input className="gx-customized-modal-content-field-input" 
                                                    placeholder={formatMessage({id: 'customer.customerdlg.content.addressholder'})} 
                                                    value={address}
                                                    onChange={(event) => { this.setState({address: event.target.value})}} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={24} sm={24} xs={24}>  
                                    <div className="gx-customized-modal-content-field">
                                        <div className="gx-customized-modal-content-field-title">
                                            <IntlMessages id="customer.customerdlg.content.city"/>
                                        </div>
                                        <div>
                                            <input className="gx-customized-modal-content-field-input"  
                                                    placeholder={formatMessage({id: 'customer.customerdlg.content.cityholder'})}
                                                    value={city}
                                                    onChange={(event) => { this.setState({city: event.target.value})}} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12} xs={12}>  
                                    <div className="gx-customized-modal-content-field">
                                        <div className="gx-customized-modal-content-field-title">
                                            <IntlMessages id="customer.customerdlg.content.state"/>
                                        </div>
                                        <div>
                                            <Select className="gx-customized-modal-content-field-input"
                                                    placeholder={formatMessage({id: "customer.customerdlg.content.stateholder"})}
                                                    suffixIcon={<i className="gx-combo-icon material-icons">expand_more</i>}>
                                                { Countries().map ( (country, index) => (
                                                    <Option key={index} value={index}>
                                                        {formatMessage({id: country})}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12} xs={12}>
                                    <div className="gx-customized-modal-content-field">
                                        <div className="gx-customized-modal-content-field-title">
                                            <IntlMessages id="customer.customerdlg.content.zip"/>
                                        </div>
                                        <div>
                                            <input className="gx-customized-modal-content-field-input" 
                                                    placeholder={formatMessage({id: 'customer.customerdlg.content.zipholder'})} 
                                                    value={zip}
                                                    onChange={(event) => { this.setState({zip: event.target.value})}} />
                                        </div>
                                    </div>   
                                </Col>                        
                            </Row>
                        </Col>

                        <Col lg={8} md={12} sm={24} xs={24}>
                            <div className="gx-customized-modal-content-field-item">
                                <SimpleMapExampleGoogleMap
                                    loadingElement={<div style={{height: `100%`}}/>}
                                    containerElement={<div style={{height: `230px`}}/>}
                                    mapElement={<div style={{height: `100%`}}/>}
                                />
                            </div>
                        </Col>
                        
                        <Col lg={8} md={12} sm={24} xs={24} className="gx-edit-customer-dlg-notes">
                            <div>
                                <div className="gx-customized-modal-content-title">
                                    <i className="material-icons">edit</i>
                                    <IntlMessages id="customer.customerdlg.content.notes"/>
                                </div>
                                <div>
                                    <input className="gx-customized-modal-content-field-input" 
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.notesholder'})} 
                                            onKeyPress={this.onAddNotePressed.bind(this)} />
                                    
                                    <div className="gx-edit-customer-dlg-notes-items" >
                                        {
                                            notes.map( (note, index) => (
                                                <div key={index} className="gx-edit-customer-dlg-notes-item">
                                                    {note}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>   
                        </Col>
                        <Col lg={8} md={12} sm={24} xs={24} className="gx-edit-customer-dlg-tags">
                            <div>
                                <div className="gx-customized-modal-content-title">
                                    <i className="material-icons">label</i>
                                    <IntlMessages id="customer.customerdlg.content.tags"/>
                                </div>
                                <div>
                                    <input className="gx-customized-modal-content-field-input" 
                                            placeholder={formatMessage({id: 'customer.customerdlg.content.tagsholder'})} 
                                            onKeyPress={this.onAddTagPressed.bind(this)} />
                                    
                                    <div className="gx-edit-customer-dlg-tags-items" >
                                        {
                                            tags.map( (tag, index) => (
                                                <span key={index} className="gx-edit-customer-dlg-tags-item gx-d-inline-flex gx-flex-nowrap gx-align-items-center">
                                                    <i className="material-icons gx-mr-2">done</i>
                                                    {tag}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>   
                        </Col>
                    </Row>
                </div>
             */}
            </div>    

            <div className="gx-customized-modal-footer" >
                { this.Buttons() }
            </div>
        </div> 
    );
  }
};

export default injectIntl(EditCustomerDlg);
