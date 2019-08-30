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
    };

    this.updateStatWithProps = this.updateStatWithProps.bind(this);

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
};

render() {
    const { intl: {formatMessage} } = this.props;
    const { searchBarWidth, searchText } = this.state;

    return (
        <div className="gx-topmenu-search">
            <Popover overlayClassName="gx-topmenu-search-popover" placement="bottomLeft"
                    overlayStyle={{width: searchBarWidth}}
                           content={<SearchBarContent/>} trigger="click">
                <div className="gx-topmenu-search-wrapper" ref={this._element}>
                  <SearchBox styleName="gx-lt-icon-search-bar-top"
                    placeholder={formatMessage({id:"topmenu.search.placeholder"})}
                    onChange={this.updateSearch.bind(this)}
                    value={searchText}/>
                </div>
            </Popover>            
        </div>
    );
}
};

export default injectIntl(SearchBar);
                  