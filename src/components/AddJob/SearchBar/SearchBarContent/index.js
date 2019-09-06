import React, {Component} from "react";
import { Popover, Tabs } from "antd";
import IntlMessages from "util/IntlMessages";
import { injectIntl } from 'react-intl';
import { data } from './data';
import SearchResult from './SearchResult';

const TabPane = Tabs.TabPane;

const Searching = () => {
    return (
        <div className="gx-search-doing">
            <IntlMessages id="topmenu.search.searching"/>
        </div>
    );
}

class SearchBarContent extends Component {    

constructor(props, context) {
    super(props, context);    
    
    this.state = {
        searchText: "",
        searching: true,
        search_result:[]
    };
}


updateStatWithProps (props) {
    // alert(this.props.searchKey);
    var result = [];
    data.map((customer, index) => {
        if(customer.name.toLowerCase().includes(this.props.searchKey.toLowerCase())){
            result.push(customer);
        }
    })
    this.setState({search_result: result})
    this.searchCustomer = this.searchCustomer.bind(this);
}

componentWillMount() {
    this.updateStatWithProps(this.props);
}


componentDidMount() {    
}

componentWillReceiveProps(nextProps) {
    this.updateStatWithProps(nextProps);
}

searchCustomer () {
    this.props.onSearchCustomer();
}

render() {
    const { searchKey } = this.props;
    const { searching, typing, search_result } = this.state;
    return (
        <div>      
            <SearchResult data={search_result} onSelectCustomer={this.searchCustomer}/>
        </div>
    );
}
};

export default injectIntl(SearchBarContent);
                  