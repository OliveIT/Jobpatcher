import React, {Component} from "react";
import { Button } from "antd";
import IntlMessages from "util/IntlMessages";
import ButtonGroup from "antd/lib/button/button-group";
import {changeDateFormat} from "util/DateTime";

const Avatar = ({icon}) => {
    return (
        <div className="gx-main-avatar gx-size-32 gx-mr-12">
            <i className="material-icons gx-w-100 gx-text-center" style={{color: '#fbfbfd', fontSize: '24px' }}>
                { icon }
            </i>                                            
        </div>
    )
}

class SearchResult extends Component {    

    constructor(props, context) {
        super(props, context);    
        
        this.state = {
        };
    }

    render () {
        const {data} = this.props;
        return (
            <div className="gx-topmenu-search-result-container">
                { data.customers &&
                <div className="gx-topmenu-search-result-category">
                    <div className="gx-topmenu-search-result-category-title">
                        <IntlMessages id="topmenu.search.customers.found" values={{ value: data.customers.length }} />                        
                    </div>
                    <div className="gx-topmenu-search-result-items">
                    { data.customers.map( (customer, index) => (
                        <div key={index} className="gx-menuitem gx-topmenu-search-result-item gx-justify-content-between">
                            <div className="gx-div-align-center">
                                <Avatar icon="person" />
                                <div>
                                    {customer.name}
                                </div>
                            </div>
                            <div className="gx-topmenu-search-result-item-tool">
                                <ButtonGroup className="gx-customer-list-buttongroup">
                                    <Button><i className="material-icons">phone</i></Button>
                                    <Button><i className="material-icons">build</i></Button>
                                    <Button><i className="material-icons">assignment_turned_in</i></Button>                                           
                                </ButtonGroup>
                            </div>
                        </div>
                    )) }
                    </div>
                </div>
                }

                { data.jobs &&
                <div className="gx-topmenu-search-result-category">
                    <div className="gx-topmenu-search-result-category-title">
                        <IntlMessages id="topmenu.search.jobs.found" values={{ value: data.jobs.length }} />                        
                    </div>
                    <div className="gx-topmenu-search-result-items">
                    { data.jobs.map( (job, index) => (
                        <div key={index} className="gx-menuitem gx-topmenu-search-result-item">
                            <Avatar icon="business" />
                            <div className="gx-activity-list-description">              
                                <div className="gx-div-align-center"> 
                                    <div className="gx-text-normal">
                                        {job.title}
                                        <span className="gx-custom-tag gx-bg-green">
                                            {job.status}
                                        </span>
                                    </div>
                                    <div className="gx-activity-list-datetime gx-mt-1">
                                        {changeDateFormat(job.datetime)}
                                    </div>
                                </div>
                                <div className="gx-activity-list-desc gx-text-grey">{job.desc}</div>
                            </div>
                        </div>
                    )) }
                    </div>
                </div>
                }
            </div>
        )
    }

}

export default SearchResult;