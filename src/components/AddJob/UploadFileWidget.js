import React, {Component} from "react";
import NewJobUpload from "components/ToolTab/NewJobUpload";
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
            <div className="gx-panel-content gx-ss-newjob-upload-panel-content">
                <NewJobUpload/>
            </div>
        </Widget>
    );
  }
};

export default UploadFileWidget;


