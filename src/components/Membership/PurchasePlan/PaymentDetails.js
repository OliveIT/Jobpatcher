import React, {Component} from "react";
import {Row, Col } from "antd";
import IntlMessages from "util/IntlMessages";
import IntlHtmlMessages from "util/IntlHtmlMessages";
import Widget from "components/Widget";
import FormInput from "components/Form/FormInput";
import { injectIntl } from 'react-intl';

const CustomOption = ({selected, onClick}) => {
    return (
        <div className={"gx-purchaseplan-custom-option" + (selected ? " active" : "")} onClick={onClick}>
            <div className="gx-purchaseplan-custom-option-selected"></div>
        </div>
    );
}

const CreditCard = ({src, width, onClick, style}) => {
    return (
        <div className="gx-purchaseplan-card gx-div-align-center gx-justify-content-center" onClick={onClick} style={{width: width, ...style}}>
            <img src={src} />
        </div>
    );
}


class PaymentDetails extends Component { 
    constructor(props, context) {
        super(props, context);    
        
        this.state = {
            type: 0,
        };    
    }

    render () {      
        const {intl: {formatMessage}} = this.props;
        const { type } = this.state;
        return (
            <Widget styleName="gx-widget-with-title gx-content-p-30"
                    title={<span className="gx-sub-title"><IntlMessages id="membership.purchase.paymentdetails" /></span>} >
                <div className="gx-div-align-center gx-justify-content-between">
                    <div className="gx-div-align-center">
                        <CustomOption selected={type === 0} onClick={() => {this.setState({type: 0})}}/>
                        <div className="gx-ml-10">
                            <div className="gx-sub-title"><IntlMessages id="membership.purchase.creditcards" /></div>
                            <div className="gx-fs-sm gx-text-grey"><IntlMessages id="membership.purchase.creditcards.desc" /></div>
                        </div>
                    </div>
                    <div className="gx-div-align-center">
                        <CreditCard src={require("assets/images/membership/card_visa.png")}  width="60px" />
                        <CreditCard src={require("assets/images/membership/card_master.png")}  width="60px" />
                        <CreditCard src={require("assets/images/membership/card_amex.png")}  width="60px" />
                        <CreditCard src={require("assets/images/membership/card_discover.png")}  width="60px" />
                    </div>
                </div>
                <div className="gx-d-lg-none">
                    <div className="gx-div-align-center gx-justify-content-between gx-mt-20">
                        <div className="gx-div-align-center">
                            <CustomOption selected={type === 1}  onClick={() => {this.setState({type: 1})}}/>
                            <div className="gx-ml-10">
                                <div className="gx-sub-title"><IntlMessages id="membership.purchase.paypal" /></div>
                                <div className="gx-fs-sm gx-text-grey"><IntlMessages id="membership.purchase.paypal.desc" /></div>
                            </div>
                        </div>
                        <CreditCard src={require("assets/images/membership/paypal.png")}  width="84px" />
                    </div>
                </div>

                <div className="gx-mt-4 gx-mb-2" >
                    <Row>
                        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                            <Row className="gx-margin-small">
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <FormInput title="membership.purchase.paymentdetails.cardname" placeholder={formatMessage({id: "membership.purchase.paymentdetails.cardname.placeholder"})}/>
                                </Col>
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <FormInput title="membership.purchase.paymentdetails.cardno" placeholder={formatMessage({id: "membership.purchase.paymentdetails.cardno.placeholder"})}/>
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <FormInput title="membership.purchase.paymentdetails.expiry" placeholder={formatMessage({id: "membership.purchase.paymentdetails.expiry.placeholder"})}/>
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <FormInput title="membership.purchase.paymentdetails.cvv" 
                                                placeholder={formatMessage({id: "membership.purchase.paymentdetails.cvv.placeholder"})}
                                                icon="help" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="gx-d-none gx-d-lg-block">
                    <div className="gx-div-align-center gx-justify-content-between">
                        <div className="gx-div-align-center">
                            <CustomOption selected={type === 1}  onClick={() => {this.setState({type: 1})}}/>
                            <div className="gx-ml-10">
                                <div className="gx-sub-title"><IntlMessages id="membership.purchase.paypal" /></div>
                                <div className="gx-fs-sm gx-text-grey"><IntlMessages id="membership.purchase.paypal.desc" /></div>
                            </div>
                        </div>
                        <CreditCard src={require("assets/images/membership/paypal.png")}  width="84px" />
                    </div>
                </div>

                <div className="gx-fs-sm gx-d-lg-none">
                    <IntlHtmlMessages id="membership.purchase.paymentdetails.notify" />
                </div>
                <div className="gx-fs-sm gx-d-none gx-d-lg-block" style={{marginTop: '56px'}}>
                    <IntlHtmlMessages id="membership.purchase.paymentdetails.notify" />
                </div>
            </Widget>
        );
    }
};

export default injectIntl(PaymentDetails);
