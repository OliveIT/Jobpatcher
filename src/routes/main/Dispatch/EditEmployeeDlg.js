import React, { Component } from "react";
import { Button, Tabs, Modal, Row, Col, Select, Input, Switch, Icon, DatePicker } from "antd";

import { GoogleMap, withGoogleMap } from "react-google-maps";
import Widget from "components/Widget";
import { injectIntl } from 'react-intl';
import { Countries } from "util/Countries";
import IntlMessages from "util/IntlMessages";
const TabPane = Tabs.TabPane;

const Option = Select.Option;

class EditEmployeeDlg extends Component {
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
            type: "",
            usesameaddress: true
        };

        this.updateStatWithProps = this.updateStatWithProps.bind(this);
        this.onSwitch = this.onSwitch.bind(this);
    }

    updateStatWithProps(props) {
        if (props.data.info1 === "Commercial") {
            this.setState({ isCommercial: true, isResidential: false });
        } else if (props.data.info1 === "Residential") {
            this.setState({ isCommercial: false, isResidential: true });
        } else {
            this.setState({ isCommercial: false, isResidential: false });
        }

        this.setState({
            firstname: props.data.name,
            type: props.data.info1
        });
    }

    onSwitch(value) {
        this.setState({usesameaddress: value});
    }

    componentWillMount() {
        this.updateStatWithProps(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.updateStatWithProps(nextProps);
    }

    Buttons() {
        const { onCancel, onSave, data } = this.props;
        return (
            <div className="gx-flex-row gx-flex-nowrap">
                <Button className="gx-edit-customer-dlg-btn "
                    style={{ color: 'white', backgroundColor: '#a5abb5', border: 'none' }}
                    onClick={onCancel}><IntlMessages id="cancel" /></Button>
                {data.name === "" &&
                    <Button className="gx-edit-customer-dlg-btn" type="primary"
                        onClick={onSave}><IntlMessages id="save" /></Button>
                }
                {data.name !== "" &&
                    <Button className="gx-edit-customer-dlg-btn" type="primary"
                        onClick={onSave}><IntlMessages id="update" /></Button>
                }
            </div>
        );
    }

    onAddNotePressed(evt) {
        if (evt.key === 'Enter') {
            if (evt.target.value != '') {
                var notes = this.state.notes;
                notes.push(evt.target.value);
                this.setState({ notes: notes });
                evt.target.value = "";
            }
        }
    }

    onAddTagPressed(evt) {
        if (evt.key === 'Enter') {
            if (evt.target.value != '') {
                var tags = this.state.tags;
                tags.push(evt.target.value);
                this.setState({ tags: tags });
                evt.target.value = "";
            }
        }
    }

    render() {
        const { intl: { formatMessage } } = this.props;
        const { title, firstname, midlename, lastname, displayname, companyname, email, mobile, workphone, phone, fax, website, street, postalcode,
            address, city, state, zip, notes, tags, type, usesameaddress } = this.state;

        return (
            <div className="gx-edit-customer-dlg" >
                <div className="gx-customized-modal-content gx-pb-0">

                    <div className="gx-customized-modal-content-block">
                        <div className="gx-customized-modal-content-title" style={{ marginBottom: "15px" }}>
                            <i className="material-icons" style={{ fontSize: "28px" }}>assignment_ind</i>&nbsp;
                        Employee Details
                        </div>

                        <Row>
                            <Col span={12} sm={12} xs={24} className="">
                                <Row gutter={4}>
                                    <Col lg={8} sm={12} xs={24} className="gutter-row">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                <IntlMessages id="customer.customerdlg.content.firstname" />
                                            </div>
                                            <div>
                                                <Input
                                                    value={firstname}
                                                    onChange={(event) => { this.setState({ firstname: event.target.value }) }} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} sm={12} xs={24} className="gutter-row">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                <IntlMessages id="customer.customerdlg.content.midlename" />
                                            </div>
                                            <div>
                                                <Input
                                                    value={midlename}
                                                    onChange={(event) => { this.setState({ midlename: event.target.value }) }} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} sm={12} xs={24} className="gutter-row">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                <IntlMessages id="customer.customerdlg.content.lastname" />
                                            </div>
                                            <div>
                                                <Input
                                                    value={lastname}
                                                    onChange={(event) => { this.setState({ lastname: event.target.value }) }} />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12} sm={12} xs={24} className="" >
                                <div className="gx-customized-modal-content-field">
                                    <div className="gx-customized-modal-content-field-title">
                                        <IntlMessages id="customer.customerdlg.content.email" />
                                    </div>
                                    <div>
                                        <Input 
                                            placeholder=""
                                            value={email}
                                            onChange={(event) => { this.setState({ email: event.target.value }) }} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {/* first row end */}
                        <Row>
                            <Col span={12} md={12} sm={12} xs={24}>
                                <Row  gutter={10}>
                                    <Col span={12} md={12} sm={24} xs={24} className="gutter-row">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                Hiring date
                                            </div>
                                            <div>
                                            <DatePicker  size={"large"}  placeholder="DD /MM /YYYY" style={{width:"100%"}}/>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col span={12} md={12} sm={24} xs={24} className="gutter-row">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                Birth date
                                            </div>
                                            <div>
                                                <DatePicker  size={"large"}  placeholder="DD /MM /YYYY" style={{width:"100%"}}/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col span={12} md={12} sm={12} xs={24}>
                                <Row  gutter={10}>
                                    <Col span={12} md={12} sm={24} xs={24}  className="gutter-row">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                <IntlMessages id="customer.customerdlg.content.phone" />
                                            </div>
                                            <div>
                                                <Input
                                                    value={phone}
                                                    onChange={(event) => { this.setState({ phone: event.target.value }) }} />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col span={12} md={12} sm={24} xs={24} className="gutter-row">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                <IntlMessages id="customer.customerdlg.content.mobile" />
                                            </div>
                                            <div>
                                                <Input
                                                    value={mobile}
                                                    onChange={(event) => { this.setState({ mobile: event.target.value }) }} />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        {/* secound row end */}
                        <Row>
                            <Col span={12} md={12} sm={12} xs={24}>
                                <Row  gutter={10}>
                                    <Col span={12} md={12} sm={24} xs={24} className="gutter-row">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                Employee role
                                            </div>
                                            <div>
                                                <Select style={{ width: '100%' }}
                                                    placeholder={"Field tech"}
                                                    suffixIcon={<i className="gx-combo-icon material-icons">expand_more</i>}>
                                                        <Option key={0} value={0}>Field tech</Option>
                                                        <Option key={1} value={1}>Field tech</Option>
                                                        <Option key={2} value={2}>Field tech</Option>
                                                        <Option key={3} value={3}>Field tech</Option>
                                                        <Option key={4} value={4}>Field tech</Option>
                                                </Select>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col span={12} md={12} sm={24} xs={24} className="gutter-row">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                Employee color
                                            </div>
                                            <div>
                                                <div style={{backgroundColor:"white", borderRadius:"18px", width: "100%", height: "36px",
                                                            boxShadow:"0 0 2px 2px rgba(0, 0, 0, 0.05)", paddingTop:"4px", paddingBottom:"4px",
                                                            paddingLeft:"10px", paddingRight:"10px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                                        {/* <div style={{width:"25px", height: "25px", borderRadius:"50%", backgroundColor:"red"}}></div> */}
                                                        <img src= {require("assets/images/color_palette.png")}></img>
                                                        <div style={{width:"25px", height: "25px", borderRadius:"50%", backgroundColor:"#f7c43d"}}></div>
                                                        <div style={{width:"25px", height: "25px", borderRadius:"50%", backgroundColor:"#39bf58"}}></div>
                                                        <div style={{width:"25px", height: "25px", borderRadius:"50%", backgroundColor:"#08bdc5"}}></div>
                                                        <div style={{width:"25px", height: "25px", borderRadius:"50%", backgroundColor:"#257bde"}}></div>
                                                        <div style={{width:"25px", height: "25px", borderRadius:"50%", backgroundColor:"#f55555"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col span={12} md={12} sm={12} xs={24}>
                                <Row gutter={10}>
                                    <Col span={12}  md={12} sm={24} xs={24} className="gutter-row">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                Join position
                                            </div>
                                            <div>
                                                <Select style={{ width: '100%' }}
                                                    placeholder={"Housekeeping"}
                                                    suffixIcon={<i className="gx-combo-icon material-icons">expand_more</i>}>
                                                        <Option key={0} value={0}>Housekeeping</Option>
                                                        <Option key={1} value={1}>Housekeeping</Option>
                                                        <Option key={2} value={2}>Housekeeping</Option>
                                                        <Option key={3} value={3}>Housekeeping</Option>
                                                        <Option key={4} value={4}>Housekeeping</Option>
                                                </Select>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col span={12}  md={12} sm={24} xs={24} className="gutter-row">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                Employee type
                                            </div>
                                            <div>
                                                <Select style={{ width: '100%' }}
                                                    placeholder={"Salaried employee"}
                                                    suffixIcon={<i className="gx-combo-icon material-icons">expand_more</i>}>
                                                        <Option key={0} value={0}>Salaried employee</Option>
                                                        <Option key={1} value={1}>Salaried employee</Option>
                                                        <Option key={2} value={2}>Salaried employee</Option>
                                                        <Option key={3} value={3}>Salaried employee</Option>
                                                        <Option key={4} value={4}>Salaried employee</Option>
                                                </Select>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>

                        {/* third row end */}
                        <Widget styleName="gx-card-full gx-customer-edit-tab-panel">
                            <Tabs className="gx-customer-job-panel-tab" defaultActiveKey="1" animated={false}
                                prevIcon={<i className="material-icons">close</i>}>
                                <TabPane tab={"Address"} key="1" className="gx-pt-20">
                                    <Row>
                                        <Col span={12}  sm={12} xs={24}>
                                            <Row>
                                                <Col span={24}  sm={24} xs={24} className=" gx-employee-edit-card-bottom-title">
                                                    <div className="gx-customized-modal-content-title">
                                                        <i className="material-icons">location_on</i>
                                                        Employee address
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={24} sm={24} xs={24}>
                                                    <div className="gx-customized-modal-content-field">
                                                        <div>
                                                            <Input
                                                                placeholder={formatMessage({ id: 'customer.customerdlg.content.street' })}
                                                                value={street}
                                                                onChange={(event) => { this.setState({ street: event.target.value }) }} />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row gutter={10}>
                                                <Col span={12}  sm={12} xs={24} className="gutter-row">
                                                    <div className="gx-customized-modal-content-field">

                                                        <div>
                                                            <Input
                                                                placeholder={formatMessage({ id: 'customer.customerdlg.content.city' })}
                                                                value={city}
                                                                onChange={(event) => { this.setState({ city: event.target.value }) }} />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={12}  sm={12} xs={24} className="gutter-row">
                                                    <div className="gx-customized-modal-content-field">
                                                        <div>
                                                            <Input placeholder={formatMessage({ id: "customer.customerdlg.content.state" })}
                                                                value={state}
                                                                onChange={(event) => { this.setState({ state: event.target.value }) }}
                                                            />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row gutter={10}>
                                                <Col span={12}  sm={12} xs={12} className="gutter-row">
                                                    <div className="gx-customized-modal-content-field">

                                                        <div>
                                                            <Input
                                                                placeholder={formatMessage({ id: 'customer.customerdlg.content.postalcode' })}
                                                                value={postalcode}
                                                                onChange={(event) => { this.setState({ postalcode: event.target.value }) }} />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={12}  sm={12} xs={12} className="gutter-row">
                                                    <div className="gx-customized-modal-content-field">
                                                        <div>
                                                            <Select style={{ width: '100%' }}
                                                                placeholder={formatMessage({ id: "customer.customerdlg.content.country" })}
                                                                suffixIcon={<i className="gx-combo-icon material-icons">expand_more</i>}>
                                                                {Countries().map((country, index) => (
                                                                    <Option key={index} value={index}>
                                                                        {formatMessage({ id: country })}
                                                                    </Option>
                                                                ))}
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>

                                        </Col >
                                        
                                    </Row>

                                </TabPane>
                                <TabPane tab={"Permissions"} key="2">
                                    <div></div>
                                </TabPane>
                                <TabPane tab={"Notes"} key="3">
                                    <div></div>
                                </TabPane>
                                <TabPane tab={"Files"} key="4">
                                    <div></div>
                                </TabPane>
                                <TabPane tab={"Tags"} key="5">
                                    <div></div>
                                </TabPane>
                            </Tabs>
                        </Widget>


                    </div>
                </div>
                <div className="gx-customized-modal-footer" >
                    {this.Buttons()}
                </div>
            </div>
        );
    }
};

export default injectIntl(EditEmployeeDlg);
