import React, {Component} from "react";
import IntlMessages from "util/IntlMessages";
import Widget from "components/Widget";
import { injectIntl } from 'react-intl';
import {membership_price} from "../data";
import UserCount from "../UserCount";
import { Button, Divider } from "antd";

const MembershipDuration = ({type, onTypeChanged}) => {
    return (
        <div className="gx-button-switch-container gx-purchase-annual-switch">
            <div className={ "gx-switch-button" + (type === 0 ? " selected" : "")} onClick={() => { onTypeChanged(0); }}>
                <IntlMessages id="membership.purchase.purchasesummary.annual" />                
            </div>   
            <div className={ "gx-switch-button" + (type === 1 ? " selected" : "")} onClick={() => { onTypeChanged(1); }}>
                <IntlMessages id="membership.purchase.purchasesummary.monthly" />                
            </div>
        </div>
    );
}

class PurchaseSummary extends Component { 
    constructor(props, context) {
        super(props, context);    
        
        this.state = {
            duration: 0,
        };
    
    }

    onChangeMembershipDuration( duration ) {
        this.setState({duration: duration});
    }

    render () {       
        const {type, onPurchase, intl: {formatMessage}} = this.props;
        const {duration} = this.state;
        return (
            <Widget styleName="gx-card-full gx-mb-20">
                <div style={{margin: '30px', marginTop: '24px'}}>
                    <div className="gx-sub-title gx-mb-20" >
                        <IntlMessages id="membership.purchase.purchasesummary" />
                    </div>
                    <div className="gx-mb-20" >
                        <MembershipDuration type={duration} onTypeChanged={this.onChangeMembershipDuration.bind(this)} />
                    </div>
                    <table className="gx-w-100">
                        <tbody>
                            <tr>
                                <td className="gx-fs-13-24 gx-font-weight-medium gx-text-grey">
                                    <IntlMessages id="membership.purchase.purchasesummary.chosenplan" />
                                </td>
                                <td className="gx-fs-13-24 gx-font-weight-semi-bold gx-text-header">                                    
                                    <IntlMessages id={membership_price[type].title} /> - <UserCount users={membership_price[type].users}/>                                    
                                </td>
                                <td>
                                    <a className="gx-fs-13-24 gx-font-weight-medium"><IntlMessages id="membership.purchase.purchasesummary.edit" /></a>
                                </td>
                            </tr>
                            
                            <tr>
                                <td className="gx-fs-13-24 gx-font-weight-medium gx-text-grey">
                                    <IntlMessages id="membership.purchase.purchasesummary.planprice" />
                                </td>
                                <td className="gx-fs-13-24 gx-font-weight-semi-bold gx-text-header">    
                                    ${membership_price[type].monthly} <IntlMessages id={"membership.table.monthly"} />
                                </td>
                                <td>
                                </td>
                            </tr>
                            
                            <tr>
                                <td className="gx-fs-13-24 gx-font-weight-medium gx-text-grey">
                                    <IntlMessages id="membership.purchase.purchasesummary.billingdate" />
                                </td>
                                <td className="gx-fs-13-24 gx-font-weight-semi-bold gx-text-header">                                    
                                    30 June, 2019                                   
                                </td>
                                <td>                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div className="gx-tip gx-fs-sm">
                            <IntlMessages id="membership.purchase.purchasesummary.tip"
                                    values={{ dollar: 65, percent: 7, duration: "yearly"}}/>
                    </div>

                    <Divider />

                    <div className="gx-form-input">
                        <div className="gx-form-input-title"><IntlMessages id="membership.purchase.purchasesummary.promo" /></div>
                        <div className="gx-form-input-input gx-flex-row gx-flex-nowrap">
                            <input className="gx-mr-10" placeholder={formatMessage({id: "membership.purchase.purchasesummary.promo.placeholder"})} />
                            <Button className="gx-btn-grey gx-purchase-btn-apply gx-mb-0"><IntlMessages id="membership.purchase.purchasesummary.apply" /></Button>
                        </div>
                    </div>
                    
                    <Divider />

                    <div className="gx-flex-row gx-flex-nowrap gx-div-align-center gx-justify-content-between">
                        <div>
                            <div className="gx-fs-xl gx-font-weight-semi-bold gx-text-header">
                                <IntlMessages id="membership.purchase.purchasesummary.total" />
                            </div>
                            <div className="gx-fs-sm gx-text-grey">
                                <IntlMessages id="membership.purchase.purchasesummary.total.sub" />
                            </div>                            
                        </div>
                        <div className="gx-purchase-total-value">
                            $49
                        </div>
                    </div>
                    
                    <Divider />

                    <Button className="gx-w-100 gx-fs-lg gx-mb-0" type="primary" style={{height: '56px'}} onClick={onPurchase}>
                        <IntlMessages id="membership.purchase.purchasesummary.purchaseplan" />
                    </Button>
                </div>
            </Widget>
        );
    }
};

export default injectIntl(PurchaseSummary);
