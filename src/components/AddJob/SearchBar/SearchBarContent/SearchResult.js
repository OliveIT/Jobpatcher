import React, {Component} from "react";


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
        
        this.selectCustomer = this.selectCustomer.bind(this);
    }

    selectCustomer () {
        this.props.onSelectCustomer();
    }

    render () {
        const {data} = this.props;
        return (
            <div className="gx-addjob-search-container">
                { !data.length &&
                    <div className="gx-menuitem gx-addjob-search-result-item"> No Result </div>
                }
                { data.map( (customer, index) => (
                        <div key={index} className="gx-menuitem gx-addjob-search-result-item">
                            <div className="gx-div-align-center" style={{width:"100%"}}  onClick={this.selectCustomer}>
                                <Avatar icon="person" />
                                <div className="gx-addjob-search-result-item-name">
                                    {customer.name}
                                </div>
                                <div className="gx-addjob-search-result-item-address">
                                    {customer.address}
                                </div>
                            </div>
                        </div>
                    )) }
            </div>
        )
    }

}

export default SearchResult;