import React, {Component} from "react";
import {Button, Modal, Row, Col } from "antd";

import { injectIntl } from 'react-intl';
import IntlMessages from "util/IntlMessages"; 
import HorizonStep from "components/Steps/HorizonStep";
import Widget from "components/Widget";
import PaymentDetails from "./PaymentDetails";
import PurchaseSummary from "./PurchaseSummary";
import PurchaseSuccess from "./PurchaseSuccess";
import PurchaseFailed from "./PurchaseFailed";
import Auxiliary from "util/Auxiliary";
import {
    DESKTOP_SIZE,
    TAB_SIZE
} from "constants/ThemeSetting";

const steps = [
    "membership.purchase.steps.1st",
    "membership.purchase.steps.2nd",
    "membership.purchase.steps.3rd",
];

const SecurityButton = () => {
    return (
        <div className="gx-round-button gx-round-button-lg" 
             style={{backgroundColor: '#fcf2d7', color: '#f5be2c'}}>
            <i className="material-icons gx-mr-3">lock</i>
            <IntlMessages id="membership.purchase.secureform" />
        </div>
    )
}

class PurchasePlan extends Component {

  constructor(props, context) {
    super(props, context);    
    
    this.state = {
        stage: 2,
        success: false,
    };
    this.renderContent = this.renderContent.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if( this.props.visible != nextProps.visible ) {
        this.setState({ stage: 2 });
    }    
  }

  onPurchase () {
      this.setState({
        stage: 3,
        success: true// Math.random() > 0.5 ? true : false,
      })
  }

  onClickDashboard () {
        this.setState({
            stage: 3,
            success: false
        })
  }

  renderContent () {
     const { type } = this.props;
     const { stage, success } = this.state;
      return (
        <div className="gx-purchaseplan-content" >
        {stage == 2 && 
        <Row>
            <Col xl={16} lg={16} md={24} sm={24} xs={24}>
                <PaymentDetails/>
            </Col>
            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                <PurchaseSummary type={type} onPurchase={this.onPurchase.bind(this)}/>
                <div className="gx-flex-row gx-flex-nowrap gx-align-items-center gx-mb-30">
                    <div><img className="gx-membership-company-icon gx-mr-3" src={require("assets/images/membership/company_trust.png")} /></div>
                    <div><img className="gx-membership-company-icon gx-mr-3" src={require("assets/images/membership/company_norton.png")} /></div>
                    <div><img className="gx-membership-company-icon gx-mr-3" src={require("assets/images/membership/company_mcafee.png")} /></div>
                    <div><img className="gx-membership-company-icon " src={require("assets/images/membership/company_secure.png")} /></div>
                </div>
            </Col>
        </Row>
        }
        {stage == 3 &&
            <Widget styleName="gx-purchaseplan-result-panel">
                { success &&
                    <PurchaseSuccess orderNo="#005438" email="email@website.com" onClickDashboard={this.onClickDashboard.bind(this)}/>
                } 
                { !success &&
                    <PurchaseFailed email="email@website.com"/>
                }
            </Widget>
        }
        </div>
  )}
  
  render() {
    const {visible, type, onCancel, onImport, width, intl: {formatMessage}} = this.props;
    const { stage, success } = this.state;
    var membership_type;
    switch(type) {
        case 0:
        membership_type = formatMessage({id: "membership.solo"});
        break;
        case 1:
        membership_type = formatMessage({id: "membership.team"});
        break;        
        case 2:
        membership_type = formatMessage({id: "membership.business"});
        break;        
        case 3:
        membership_type = formatMessage({id: "membership.enterprise"});
        break;
    }
    return ( 
        <Auxiliary>
        { width > TAB_SIZE &&
        <Modal
            title={ 
                <div className="gx-div-align-center gx-justify-content-between gx-h-100" >
                    <div className="gx-purchaseplan-modal-title"><IntlMessages id="membership.purchase.title" values={{value: membership_type}}/></div>
                    <div className="gx-d-none gx-d-xl-block">
                        <HorizonStep current={stage} stepTitles={steps}/>
                    </div>
                    <SecurityButton />
                    <div className="gx-membership-header-exit-btn">
                        <i className="material-icons gx-membership-modal-close" onClick={() => { if( onCancel ) onCancel(); }}>clear</i>
                    </div>
                </div>
            }
            closable={false}
            centered
            wrapClassName="gx-purchaseplan-modal vertical-center-modal"
            visible={visible}
            onCancel={onCancel}
            width={ width - 60 }
        >
                    
            {this.renderContent()}
        </Modal>
        }
        { (visible && width <= TAB_SIZE) &&
            <div className="gx-fullscreen-dialog">
                <div className="gx-purchaseplan-header">
                    <div className="gx-purchaseplan-modal-title"><IntlMessages id="membership.purchase.title" values={{value: membership_type}}/></div>
                </div>
                <div className="gx-purchaseplan-fullscreen-scroll">
                    <div className="gx-purchaseplan-fullscreen-content">
                        {this.renderContent()}                
                    </div>
                </div>
                
                <div className="gx-membership-header-exit-btn">
                    <i className="material-icons gx-membership-modal-close" onClick={() => { if( onCancel ) onCancel(); }}>clear</i>
                </div>
            </div>
        }
        </Auxiliary>
    );
  }
};

export default injectIntl(PurchasePlan);
