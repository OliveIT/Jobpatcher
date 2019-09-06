import React, {Component} from "react";
import { Popover, Modal } from "antd";
import { injectIntl } from 'react-intl';

import SearchBox from "components/SearchBox";
import SearchBarContent from "./SearchBarContent";

class SearchBar extends Component {    

    _element = React.createRef();

constructor(props, context) {
    super(props, context);    
    
    this.state = {
        searchText: "",
        visible: false,
        searchBarWidth: 330,
        typing: false,
        searching: false
    };
    this.updateStatWithProps = this.updateStatWithProps.bind(this);
    this.hideLoading = this.hideLoading.bind(this);
    this.searchCustomer = this.searchCustomer.bind(this);
}

updateStatWithProps (props) {
        
}

componentWillMount() {
    this.updateStatWithProps(this.props);
}

componentWillReceiveProps(nextProps) {
    if( nextProps.width !== this.props.width ) {
        this.setState( {searchBarWidth : this._element.current.clientWidth } );
    }

    this.updateStatWithProps(nextProps);
}

componentDidMount() {
    this.setState( {searchBarWidth : this._element.current.clientWidth } );    
}

updateSearch = (evt) => {
    this.setState({
      searchText: evt.target.value,
    });
    this.setState({ typing: true });
    if (evt.target.value === ""){
        this.setState({searching: false});
    }
    else {
        this.setState({searching: true});
    }
    setTimeout( this.hideLoading, 1000);
}

hideLoading() {
    this.setState({
        typing: false,
    });
}

searchCustomer() {
    this.props.onSearchCustomer();
}
render() {
    const { intl: {formatMessage} } = this.props;
    const { searchBarWidth, searchText, typing, searching } = this.state;

    return (
        <div>
            <div className="gx-addjob-search-wrapper" ref={this._element}>
                <SearchBox styleName="gx-addjob-searchbar gx-lt-icon-search-bar"
                        placeholder={formatMessage({id:"job.add.search.placeholder"})}
                        onChange={this.updateSearch.bind(this)}
                        value={searchText}
                        focus={true}
                        style={{postion:"relative"}}/>    
                {typing &&
                    <div className="gx-addjob-search-typing-wrapper">
                        <img src={require("assets/images/loading.png")}/>
                    </div>
                }
                {searching &&
                    <SearchBarContent searchKey={searchText} onSearchCustomer={this.searchCustomer}/>
                }
            </div>
        </div>
    );
}
};

export default injectIntl(SearchBar);
                  