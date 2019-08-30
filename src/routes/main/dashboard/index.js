import React, {Component}  from "react";
import {Col, Row} from "antd";
import {connect} from "react-redux";
import Auxiliary from "util/Auxiliary";

import InvoiceCard from "components/dashboard/cards/InvoiceCard";
import TodayStatCard from "components/dashboard/cards/TodayStatCard";
import EstimateCard from "components/dashboard/cards/EstimateCard";
import ShortcutCard from "components/dashboard/cards/ShortcutCard";
import JobCard from "components/dashboard/cards/JobCard";
import CustomerCard from "components/dashboard/cards/CustomerCard";
import SuggestedActionCard from "components/dashboard/cards/SuggestedActionCard";
import FeedbackCard from "components/dashboard/cards/FeedbackCard";
import UpgradeCard from "components/dashboard/cards/UpgradeCard";

import Membership from "components/Membership";
import PurchasePlan from "components/Membership/PurchasePlan";
import OverallCard from "../../../components/dashboard/cards/OverallCard";

class Dashboard extends Component {
  
  state = {
    membershipDlgVisible: false,
    membershipPurchaseVisible: false,
    membershipType: "Team"
  };

  constructor(props, context) {
    super(props, context);
  }

  showMembershipDlg() {
    this.setState({membershipDlgVisible: true});
  }

  onCloseMembershipDlg() {
    this.setState({membershipDlgVisible: false});
  }

  showPurchasePlan(type) {
    this.setState({
                membershipType: type,
                membershipDlgVisible: false,
                membershipPurchaseVisible: true});
  }

  onClosePurchasePlan() {
    this.setState({membershipPurchaseVisible: false});
  }

  render() {
    const { width } = this.props;
    const { membershipDlgVisible, membershipPurchaseVisible, membershipType } = this.state;
    return (
      <Auxiliary>
        <div className="gx-main-content-container gx-mt-30">
          <Row>
            <Col xxl={12} xl={16} lg={24} md={24} sm={24} xs={24}>
              <OverallCard company="Super clean Inc."/>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={12} sm={24} xs={24}>
              <InvoiceCard/>
            </Col>
            <Col xxl={6} xl={8} lg={12} md={12} sm={24} xs={24}>
              <EstimateCard/>
            </Col>        
            <Col xxl={6} xl={8} lg={12} md={12} sm={24} xs={24}>
              <CustomerCard/>
            </Col>   
            <Col xxl={6} xl={8} lg={12} md={12} sm={24} xs={24}>
              <JobCard/>
            </Col>        
            <Col xxl={6} xl={8} lg={12} md={12} sm={24} xs={24}>
              <ShortcutCard/>
            </Col>    
            <Col xxl={6} xl={8} lg={12} md={12} sm={24} xs={24}>
              <FeedbackCard onMembershipClick={this.showMembershipDlg.bind(this)}/>
            </Col>
          </Row>
        </div>

        <Membership visible={membershipDlgVisible} 
                    onCancel={this.onCloseMembershipDlg.bind(this)}
                    onNext={this.showPurchasePlan.bind(this)}
                    width={ width > 1250 + 40 ? 1250 + 40 : width } 
        />
        <PurchasePlan visible={membershipPurchaseVisible}
                    onCancel={this.onClosePurchasePlan.bind(this)} 
                    width={ width > 1250 + 40 ? 1250 + 40 : width } 
                    type={membershipType} />
          
      </Auxiliary>
    );
  }
};

const mapStateToProps = ({settings}) => {
  const {locale, navStyle, navCollapsed, width, currentPage} = settings;
  return {locale, navStyle, navCollapsed, width, currentPage}
};

export default connect(mapStateToProps) (Dashboard);
