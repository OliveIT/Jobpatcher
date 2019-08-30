import React, {Component} from "react";
import { Popover, Tabs } from "antd";
import IntlMessages from "util/IntlMessages";
import SearchBox from "components/SearchBox";
import { injectIntl } from 'react-intl';
import { search_result } from './data';
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
        typing: false,
    };    
    this.hideLoading = this.hideLoading.bind(this);
}


updateStatWithProps (props) {
    
}

componentWillMount() {
    this.updateStatWithProps(this.props);
}


hideLoading() {
    this.setState({ 
        searching: false,
        typing: false 
    });
}

componentDidMount() {    
    setTimeout( this.hideLoading, 2000);
}

componentWillReceiveProps(nextProps) {
    this.updateStatWithProps(nextProps);
}

updateSearch = (evt) => {
    this.setState({
      searchText: evt.target.value,
    });
    this.setState({ typing: true });
    setTimeout( this.hideLoading, 1000);
};

render() {
    const { intl: {formatMessage} } = this.props;
    const { searching, typing, searchText } = this.state;
    return (
        <div className="gx-w-100">
            <div className="gx-topmenu-search-wrapper">
                <SearchBox styleName="gx-lt-icon-search-bar-top"
                        placeholder={formatMessage({id:"topmenu.search.placeholder"})}
                        onChange={this.updateSearch.bind(this)}
                        value={searchText}
                        focus={true}/>    
                {typing &&
                    <div className="gx-topmenu-search-typing-wrapper">
                        <img src={require("assets/images/loading.png")}/>
                    </div>
                }   
            </div>               
            <Tabs className="gx-tabs-search" defaultActiveKey="1">
                <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><IntlMessages id="topmenu.search.all"/></span>} key="1">                    
                    
                    {searching && 
                        <Searching />
                    }
                    { !searching && 
                        <SearchResult data={search_result} />
                    }
                </TabPane>
                <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><IntlMessages id="topmenu.search.jobs"/></span>} key="2">
                    {searching && 
                        <Searching />
                    }
                </TabPane>
                <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><IntlMessages id="topmenu.search.invoices"/></span>} key="3">
                    {searching && 
                        <Searching />
                    }
                </TabPane>
                <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><IntlMessages id="topmenu.search.customers"/></span>} key="4">
                    {searching && 
                        <Searching />
                    }
                </TabPane>
                <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><IntlMessages id="topmenu.search.employees"/></span>} key="5">
                    {searching && 
                        <Searching />
                    }
                </TabPane>
            </Tabs> 
        </div>
    );
}
};

export default injectIntl(SearchBarContent);
                  