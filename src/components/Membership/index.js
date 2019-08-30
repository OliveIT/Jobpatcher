import React, {Component} from "react";
import { Button, Modal } from "antd";

import MembershipContent from "./MembershipContent";
import MembershipContentMobile from "./MembershipContentMobile";
import IntlMessages from "util/IntlMessages";
import Auxiliary from "util/Auxiliary";
import {
    DESKTOP_SIZE,
    TAB_SIZE
} from "constants/ThemeSetting";

const MembershipDuration = ({type, onTypeChanged}) => {
    return (
        <div>
            <div className="gx-button-switch-container gx-membership-annual-switch gx-mb-12">
                <div className={ "gx-switch-button" + (type === 0 ? " selected" : "")} onClick={() => { onTypeChanged(0); }}>
                    <IntlMessages id="membership.switch.annually" />                
                </div>   
                <div className={ "gx-switch-button" + (type === 1 ? " selected" : "")} onClick={() => { onTypeChanged(1); }}>
                    <IntlMessages id="membership.switch.monthly" />                
                </div>
            </div>

            <div className="gx-membership-discount-wrapper">
                <div>
                    <div className="gx-membership-discount">
                        <IntlMessages id="membership.discounts" values={{value: 7}} />
                    </div>
                </div>
                <div>
                    <div className="gx-membership-discount">                        
                    </div>
                </div>
            </div>
        </div>
    );
}

const Footer = ({onContinue}) => {
    return (
        <div className="gx-membership-footer">
            <div className="gx-membership-footer-company-wrapper gx-no-scrollbar">
                <div className="gx-flex-row gx-flex-nowrap gx-align-items-center gx-justify-content-center">
                    <img className="gx-membership-company-icon gx-mr-3" src={require("assets/images/membership/company_30.png")} />
                    <img className="gx-membership-company-icon gx-mr-3" src={require("assets/images/membership/company_trust.png")} />
                    <img className="gx-membership-company-icon gx-mr-3"  src={require("assets/images/membership/company_norton.png")} />
                    <img className="gx-membership-company-icon gx-mr-3"  src={require("assets/images/membership/company_mcafee.png")} />
                    <img className="gx-membership-company-icon gx-pr-3"  src={require("assets/images/membership/company_secure.png")} />
                </div>
            </div>
            <div className="gx-membership-footer-button-wrapper">
                <Button className="gx-continue-btn" type="primary" onClick={onContinue}>
                    <IntlMessages id="membership.footer.continue" />
                </Button>
            </div>
        </div>
    );
}

const HEADER_HEIGHT = 180;

class Membership extends Component {    

    _membership_scroll = React.createRef();
    _membership_content = React.createRef();
    
  constructor(props, context) {
    super(props, context);    
    
    this.state = {
        isMonthly: 0,
        type: 0,
        scrollTop: 0,
    };

    this.updateStatWithProps = this.updateStatWithProps.bind(this);
  }

  updateStatWithProps (props) {
        
  }

  componentWillMount() {
        this.updateStatWithProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
        this.updateStatWithProps(nextProps);
  }

  onChangeMembershipDuration( duration ) {
    this.setState({isMonthly: duration});
  }

  onChangeMembershipType( type ) {
    this.setState({type: type});
  }

  onWheel(event) {
    var scrollTop = this.state.scrollTop - event.nativeEvent.wheelDelta / 4;
    if( scrollTop < 0 )
        scrollTop = 0;
    else if ( scrollTop >= HEADER_HEIGHT + this._membership_content.current.clientHeight ) {
        scrollTop = HEADER_HEIGHT + this._membership_content.current.clientHeight;
    }

    if( Math.abs( this.state.scrollTop - scrollTop ) < 10 )
        return;

    this.setState({ scrollTop: scrollTop });

    if( scrollTop > HEADER_HEIGHT ) {
        this._membership_scroll.current.style.top = -1 * HEADER_HEIGHT + 'px';
    } else {
        this._membership_scroll.current.style.top = -1 * scrollTop + 'px';
    }
  }

  renderHeader() {
    const { isMonthly } = this.state;
      return (
        <div className="gx-membership-header">
            <div className="gx-membership-header-bg">
                <img src={require("assets/images/membership/back.png")} />
            </div>
            <div className="gx-membership-header-mask">                    
            </div>

            <div className="gx-membership-header-content">
                <div className="gx-membership-header-title">
                    <IntlMessages id="membership.title" />
                </div>
                <div className="gx-membership-header-description gx-px-20">
                    <IntlMessages id="membership.description" />
                </div>
                <div className="gx-flex-row gx-justify-content-center">
                    <MembershipDuration type={isMonthly} onTypeChanged={this.onChangeMembershipDuration.bind(this)}/>
                </div>
            </div>
        </div>
      )
  }

  render() {
    const { visible, onCancel, onNext, width } = this.props;
    const { isMonthly, type, scrollTop } = this.state;

    return (  
        <Auxiliary>
        { width > TAB_SIZE &&
            <Modal
            title={ <div></div> }
            closable={false}
            centered
            wrapClassName="gx-membership-modal vertical-center-modal"
            visible={ visible }
            onCancel={onCancel}
            width={ width - 60 }
            >   

                <div className="gx-membership-scroll" onWheel={this.onWheel.bind(this)} ref={this._membership_scroll}>
                    
                    {this.renderHeader()}

                    <div className="gx-membership-content" ref={this._membership_content}>
                        <MembershipContent type={type} onChangeType={this.onChangeMembershipType.bind(this)} 
                                            scroll={scrollTop - HEADER_HEIGHT >= 0 ? scrollTop - HEADER_HEIGHT : 0}/>
                    </div>  
                </div>

                <div className="gx-membership-header-exit-btn">
                    <i className="material-icons gx-membership-modal-close" onClick={() => { if( onCancel ) onCancel(); }}>clear</i>
                </div>
                <Footer onContinue={() => { onNext(type); }}/>
            </Modal>        
        }
        { (visible && width <= TAB_SIZE) &&            
            <div className="gx-fullscreen-dialog">
                {this.renderHeader()}
                <div className="gx-membership-header-exit-btn">
                    <i className="material-icons gx-membership-modal-close" onClick={() => { if( onCancel ) onCancel(); }}>clear</i>
                </div>
                <div className="gx-membership-content-mobile">
                    <MembershipContentMobile width={width} type={type} onChangeType={this.onChangeMembershipType.bind(this)} />
                </div>
                <Footer onContinue={() => { onNext(type); }}/>
            </div>            
        }
        </Auxiliary>
    );
  }
};

export default Membership;
