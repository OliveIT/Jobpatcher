import React, {Component} from "react";
import IntlMessages from "util/IntlMessages";
import {Avatar} from "antd";
import RoundPager from "components/RoundPager"

const Item = ({count, title, className}) => {
    return (
        <div className={className}>
            <div className="gx-media" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <div className="gx-text-center gx-w-100">
                    <Avatar className="count gx-fs-xl-nl gx-font-weight-semi-bold gx-mb-2" size="large">
                        {count}
                    </Avatar>
                    <div className="text gx-fs-13-20 gx-font-weight-medium">
                        <IntlMessages id={title} />                        
                    </div>
                </div>
            </div>
        </div>
    );
};

class OverviewWelcome extends Component {

    constructor(props, context) {
        super(props, context);    
        
        this.state = {
            roundIdx: 0
        };
    }

    onChangeRoundItem ( idx ) {
        this.setState({roundIdx: idx});
    }

    render() {    
        const { name } = this.props;
        const { roundIdx } = this.state;
        return (
            <div className="gx-dashboard-overall-overview-welcome-panel">
                <div className="gx-mb-3 gx-text-header">
                    <div className="gx-fs-sm"><IntlMessages id="dashboard.overall.welcome" /></div>
                    <div className="gx-fs-18 gx-font-weight-semi-bold">{name}!</div>
                </div>
                <div className="gx-div-align-center gx-justify-content-between gx-mb-3">
                    <div className="gx-fs-md gx-font-weight-medium gx-text-grey"><IntlMessages id="dashboard.overall.quickactions" /></div>
                    <RoundPager count={3} index={roundIdx} onChange={this.onChangeRoundItem.bind(this)}/>
                </div>
                <div className="gx-mb-3">
                    <div className="gx-dashboard-overall-overview-welcome-quickaction gx-div-align-center gx-mb-2" >
                        <div className="gx-dashboard-overall-overview-welcome-roundindex" >1</div>
                        <div className="gx-fs-13-20 gx-font-weight-medium gx-text-primary">
                            <IntlMessages id="dashboard.overall.customizeinvoice" />                    
                        </div>
                    </div>
                    <div className="gx-dashboard-overall-overview-welcome-quickaction gx-div-align-center" >
                        <div className="gx-dashboard-overall-overview-welcome-roundindex" >2</div>   
                        <div className="gx-fs-13-20 gx-font-weight-medium gx-text-primary">                 
                            <IntlMessages id="dashboard.overall.setuppayments" />              
                        </div>      
                    </div>
                </div>
                <div className="gx-div-align-center gx-w-100">
                    <Item count={5} title="dashboard.overall.openestimates" className="gx-dashboard-overall-small-card cyan"/>
                    <Item count={2} title="dashboard.overall.leaverequests" className="gx-dashboard-overall-small-card green"/>
                </div>
            </div>
        )
    }
}

export default OverviewWelcome;