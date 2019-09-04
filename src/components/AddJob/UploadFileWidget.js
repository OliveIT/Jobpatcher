import React, {Component} from "react";
import Files from "components/ToolTab/Files";
import Widget from "components/Widget";
import IntlMessages from "util/IntlMessages";

class UploadFileWidget extends Component {
  render() {
    return (
        <Widget styleName="gx-card-full gx-dispatcher-job-panel gx-m-0">
            <div className="gx-panel-title-bar ">
                <h5>
                    UPLOAD FILES
                </h5>
            </div>
            <div className="gx-panel-content">
                <Files/>
            </div>
        </Widget>
    );
  }
};

export default UploadFileWidget;


