import React, {Component} from "react";

import ActivityListItem from "components/List/ActivityListItem";
import IntlMessages from "util/IntlMessages";

const data = [
    require("assets/images/upload/1.png"),
    require("assets/images/upload/2.png"),
    require("assets/images/upload/1.png"),
    require("assets/images/upload/2.png"),
    require("assets/images/upload/1.png"),
    require("assets/images/upload/2.png"),
];

class Photos extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }

  render() {
    const {title} = this.props;
    return (
        <div className="gx-customer-tab gx-job-photo-tab" >
            <div className="gx-customer-tab-header" >
                <h5 className="gx-text-uppercase">
                    <IntlMessages id={title} />
                </h5>
                <div className="gx-div-align-center gx-link">
                    <i className="material-icons gx-mr-2">cloud_upload</i>
                    <div className="gx-fs-13-20 gx-font-weight-medium">
                        <IntlMessages id="upload" />
                    </div>
                </div>
            </div>
            <div className="gx-job-photo-tab-scroll" >
                <div className="gx-customer-tab-content">
                    {data.map((item, index) => (
                        <img key={index} className="gx-job-photo-tab-item" src={item} />
                    ))}
                </div>
            </div >
        </div> 
    );
  }
};

export default Photos;
