import React, {Component} from "react";

class SearchBox extends Component {    

  constructor(props, context) {
      super(props, context);    
  }
  
  componentDidMount() {
    const { focus } = this.props;
    if( focus )
      this.nameInput.focus();
  }

  componentDidUpdate() {
    const { focus } = this.props;
    if( focus )
      this.nameInput.focus();
  }

  render () {
    const {styleName, placeholder, onChange, value} = this.props;
    return (
      <div className={`gx-search-bar ${styleName}`}>
        <div className="gx-form-group">
          <input className="ant-input" type="search" placeholder={placeholder} onChange={onChange}
                value={value}
                ref={(input) => { this.nameInput = input; }} />
          <span className="gx-search-icon gx-pointer">
            <div className="ant-row-flex gx-w-100 gx-h-100 gx-justify-content-center gx-align-items-center">
              <i className="material-icons">search</i>
            </div>
          </span>
        </div>
      </div>
    );
  }
};
export default SearchBox;

SearchBox.defaultProps = {
  styleName: "",
  value: "",
};
