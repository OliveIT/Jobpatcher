import React, {Component} from "react";
import Widget from "components/Widget";
import NewJobNotes from "components/ToolTab/NewJobNotes";
import IntlMessages from "util/IntlMessages";

const notes = [
    {
        name: "Tomas Belford",
        note: "Lesser land heaven which above first",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png")
    },
    {
        name: "Tomas Belford",
        note: "Lesser land heaven",
        datetime: "5/23/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png")
    }
];

class PrivateNoteWidget extends Component {
  render() {
    const {className, title, padding} = this.props;
    return (
        <Widget styleName="gx-card-full gx-dispatcher-job-panel gx-m-0 gx-ss-newjob-notes-panel">
            <div className="gx-panel-title-bar ">
                <h5>
                    PRIVATE NOTES
                </h5>
            </div>
            <div className="gx-panel-content gx-ss-newjob-notes-panel-content">
                <NewJobNotes/>
            </div>
        </Widget>
    );
  }
};

export default PrivateNoteWidget;


