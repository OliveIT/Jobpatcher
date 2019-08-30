import React, { Component } from "react";

import Widget from "components/Widget/index";
import RoundPager from "components/RoundPager";
import IntlMessages from "util/IntlMessages";
import IntlHtmlMessages from "util/IntlHtmlMessages";
import Auxiliary from "util/Auxiliary";

const SmallBar = ({color}) => {
    return (
        <div className="gx-mr-1" style={{width: '10px', height: '3px', backgroundColor: color}}>
        </div>
    );
}

class FeedbackCard extends Component {

    refreshIntervalId = 0;
    constructor(props, context) {
        super(props, context);    
        
        this.state = {
            page: 0
        };

        this.toggleCard = this.toggleCard.bind(this);
    }

    componentDidMount() {    
        this.refreshIntervalId = setInterval( this.toggleCard, 15000);
    }

    componentWillUnmount() {
        clearInterval( this.refreshIntervalId );
    }

    toggleCard ( ) {
        this.setState({page: (this.state.page + 1 ) % 2 });
    }

    onChangePage ( idx ) {
        this.setState({page: idx});
        clearInterval( this.refreshIntervalId );
        this.refreshIntervalId = setInterval( this.toggleCard, 15000);
    }

    render() { 
        const { onMembershipClick } = this.props;
        const { page } = this.state;
        return (
        <Auxiliary>
            { page === 0 &&
            <Widget title={ <h4 className="gx-text-capitalize gx-mb-0"><IntlMessages id="dashboard.feedback"/></h4> }  styleName="gx-dashboard-card" >
                <div>
                    <div className="gx-mt-2 gx-mb-3 gx-font-weight-medium">
                        <IntlHtmlMessages id="dashboard.feedback.subtitle" />
                    </div>
                    <div className="gx-flex-row gx-mt-1 gx-mb-3">
                        <SmallBar color="#08bdc5"/>
                        <SmallBar color="#39bf58"/>
                        <SmallBar color="#f7c43d"/>
                        <SmallBar color="#f55555"/>
                    </div>
                    <div className="gx-flex-row gx-w-100 gx-justify-content-between gx-align-items-center">
                        <div className="gx-w-66 gx-pr-3 gx-mb-30">
                            <div className="gx-text-grey gx-mb-5 gx-fs-13-20">
                                <IntlMessages id="dashboard.feedback.description"/>
                            </div>
                            <div>
                                <a className="gx-text-link gx-font-weight-medium"><IntlMessages id="dashboard.feedback.link"/></a>
                            </div>
                        </div>
                        <div className="gx-w-33 gx-text-right">
                            <img src={require("assets/images/dashboard/feedback.png")} />
                        </div>
                    </div>
                    <div className="gx-dashboard-feedback-pager">
                        <RoundPager count={2} index={page} onChange={this.onChangePage.bind(this)} />
                    </div>
                </div>
            </Widget>
            }
            { page === 1 &&
            <Widget title={ <h4 className="gx-text-capitalize gx-mb-0"><IntlMessages id="dashboard.upgrade"/></h4> }  styleName="gx-dashboard-card" >
                <div>
                    <div className="gx-mt-2 gx-mb-3 gx-font-weight-medium">
                        <IntlHtmlMessages id="dashboard.upgrade.subtitle" values={{ value: 8 }} />
                    </div>
                    <div className="gx-flex-row gx-mt-1 gx-mb-3">
                            <SmallBar color="#08bdc5"/>
                            <SmallBar color="#39bf58"/>
                            <SmallBar color="#f7c43d"/>
                            <SmallBar color="#f55555"/>
                    </div>
                    <div className="gx-flex-row gx-w-100 gx-justify-content-between gx-align-items-center">
                        <div className="gx-w-66 gx-pr-3 gx-mb-30">
                            <div className="gx-text-grey gx-mb-5 gx-fs-13-20">
                                <IntlMessages id="dashboard.upgrade.description"/>                    
                            </div>
                            <div>
                                <a className="gx-text-link gx-font-weight-medium" onClick={onMembershipClick}><IntlMessages id="dashboard.upgrade.link"/></a>
                            </div>
                        </div>
                        <div className="gx-w-33 gx-text-right">
                            <img src={require("assets/images/dashboard/upgrade.png")} />
                        </div>
                    </div>
                    <div className="gx-dashboard-feedback-pager">
                        <RoundPager count={2} index={page} onChange={this.onChangePage.bind(this)} />
                    </div>
                </div>
            </Widget>
            }
        </Auxiliary>
    )}
};

export default FeedbackCard;
