import React, {Component} from "react";

import IntlMessages from "util/IntlMessages";
import Auxiliary from "util/Auxiliary";
import Notes from "components/ToolTab/Notes";
import Photos from "components/ToolTab/Photos";

class Summary extends Component {
    
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <Auxiliary>
            <Notes />
            <Photos title="job.sidebar.photos" />
        </Auxiliary>
    );
  }
};

export default Summary;
