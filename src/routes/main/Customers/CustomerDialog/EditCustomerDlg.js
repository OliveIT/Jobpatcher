import React, { Component } from "react";
import { Button, Tabs, Avatar, Row, Col, Select, Input, Switch, Icon } from "antd";

import { GoogleMap, withGoogleMap } from "react-google-maps";
import Widget from "components/Widget";
import { injectIntl } from 'react-intl';
import { Countries } from "util/Countries";
import IntlMessages from "util/IntlMessages";
const TabPane = Tabs.TabPane;
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 47.646935, lng: -122.303763 }}
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
            address, city, state, zip, notes, tags, type } = this.state;

        return (
            <div className="gx-edit-customer-dlg" >
                <div className="gx-customized-modal-content">

                    <div className="gx-customized-modal-content-block">
                        <div className="gx-customized-modal-content-title" style={{ marginBottom: "20px" }}>
                            <i className="material-icons" style={{ fontSize: "28px" }}>account_circle</i>&nbsp;
                        <IntlMessages id="customer.customerdlg.content.customerdetails" />
                        </div>

                        <Row>
                            <Col span={12} sm={12} className="width-100-mobile">
                                <Row >
                                    <Col lg={5} sm={12} className="width-100-mobile">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                <IntlMessages id="customer.customerdlg.content.title" />
                                            </div>
                                            <div>
                                                <Input
                                                    value={title}
                                                    onChange={(event) => { this.setState({ title: event.target.value }) }} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5} sm={12} className="width-100-mobile">
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
                                    <Col lg={9} sm={12} className="width-100-mobile">
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
                                    <Col lg={5} sm={12} className="width-100-mobile">
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
                            <Col span={12} className="width-100-mobile" >
                                <div className="gx-customized-modal-content-field">
                                    <div className="gx-customized-modal-content-field-title">
                                        <IntlMessages id="customer.customerdlg.content.email" />
                                    </div>
                                    <div>
                                        <Input style={{ fontStyle: "italic" }}
                                            placeholder="Separate multiple emails with commas"
                                            value={email}
                                            onChange={(event) => { this.setState({ email: event.target.value }) }} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {/* first row end */}
                        <Row>
                            <Col span={12}  className="width-100-mobile">
                                <div className="gx-customized-modal-content-field">
                                    <div className="gx-customized-modal-content-field-title">
                                        <IntlMessages id="customer.customerdlg.content.companyname" />
                                    </div>
                                    <div>
                                        <Input
                                            placeholder={formatMessage({ id: 'customer.customerdlg.content.companynameholder' })}
                                            value={companyname}
                                            onChange={(event) => { this.setState({ companyname: event.target.value }) }} />
                                    </div>
                                </div>
                            </Col>

                            <Col span={12}className="width-100-mobile">
                                <Row >
                                    <Col span={12}  className="width-100-mobile">
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

                                    <Col span={12} className="width-100-mobile">
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
                            <Col span={12}  className="width-100-mobile">
                                <div className="gx-customized-modal-content-field">
                                    <div className="gx-customized-modal-content-field-title">
                                        <IntlMessages id="customer.customerdlg.content.displayname" />
                                    </div>
                                    <div>
                                        <Input
                                            value={displayname}
                                            onChange={(event) => { this.setState({ displayname: event.target.value }) }} />
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} className="width-100-mobile">
                                <Row>
                                    <Col span={12} className="width-100-mobile">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                <IntlMessages id="customer.customerdlg.content.fax" />
                                            </div>
                                            <div>
                                                <Input
                                                    value={fax}
                                                    onChange={(event) => { this.setState({ fax: event.target.value }) }} />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col span={12} className="width-100-mobile">
                                        <div className="gx-customized-modal-content-field">
                                            <div className="gx-customized-modal-content-field-title">
                                                <IntlMessages id="customer.customerdlg.content.website" />
                                            </div>
                                            <div>
                                                <Input
                                                    value={website}
                                                    onChange={(event) => { this.setState({ website: event.target.value }) }} />
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
                                        <Col span={12} className="width-100-mobile">
                                            <Row>
                                                <Col span={12} className="width-100-mobile">
                                                    <div className="gx-customized-modal-content-title">
                                                        <i className="material-icons">location_on</i>
                                                        <IntlMessages id="customer.customerdlg.content.customerlocation" />
                                                    </div>
                                                </Col>
                                                <Col span={12} className="notDisplayOnMobile">
                                                    <a className="gx-customized-modal-content-title">
                                                        <IntlMessages id="customer.customerdlg.content.anotheraddress" />
                                                    </a>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={24}>
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
                                            <Row>
                                                <Col span={12} className="width-100-mobile">
                                                    <div className="gx-customized-modal-content-field">

                                                        <div>
                                                            <Input
                                                                placeholder={formatMessage({ id: 'customer.customerdlg.content.city' })}
                                                                value={city}
                                                                onChange={(event) => { this.setState({ city: event.target.value }) }} />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={12} className="width-100-mobile">
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
                                            <Row>
                                                <Col span={12}>
                                                    <div className="gx-customized-modal-content-field">

                                                        <div>
                                                            <Input
                                                                placeholder={formatMessage({ id: 'customer.customerdlg.content.postalcode' })}
                                                                value={postalcode}
                                                                onChange={(event) => { this.setState({ postalcode: event.target.value }) }} />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={12}>
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
                                        <Col span={12} className="width-100-mobile">
                                            <Row>
                                                <Col span={12} className="width-100-mobile">
                                                    <div className="gx-customized-modal-content-title">
                                                        <Icon type="credit-card" />
                                                        Billing Address
                                                    </div>
                                                </Col>
                                                <Col span={12} className="notDisplayOnMobile">
                                                    <Switch size="small" defaultChecked />
                                                    <IntlMessages id="customer.customerdlg.content.sameascustomeraddr" />
                                                </Col>
                                            </Row>
                                            <Row><Col span={24}>
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
                                            <Row>
                                                <Col span={12} className="width-100-mobile">
                                                    <div className="gx-customized-modal-content-field">

                                                        <div>
                                                            <Input
                                                                placeholder={formatMessage({ id: 'customer.customerdlg.content.city' })}
                                                                value={city}
                                                                onChange={(event) => { this.setState({ city: event.target.value }) }} />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={12} className="width-100-mobile">
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
                                            <Row>
                                                <Col span={12}>
                                                    <div className="gx-customized-modal-content-field">

                                                        <div>
                                                            <Input
                                                                placeholder={formatMessage({ id: 'customer.customerdlg.content.postalcode' })}
                                                                value={postalcode}
                                                                onChange={(event) => { this.setState({ postalcode: event.target.value }) }} />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={12}>
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

                                        </Col>
                                    </Row>

                                </TabPane>
                                <TabPane tab={"Payment"} key="2">
                                    <div></div>
                                </TabPane>
                                <TabPane tab={"Notes"} key="3">
                                    <div></div>
                                </TabPane>
                                <TabPane tab={"Files"} key="4">
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

export default injectIntl(EditCustomerDlg);
