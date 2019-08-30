import React from 'react';
import CircularProgress from "components/CircularProgress/index";
import {message} from 'antd';
import Auxiliary from "util/Auxiliary";
import {connect} from "react-redux";
import {hideMessage} from "appRedux/actions/Common";

class InfoView extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.error || nextProps.message) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 3000);
    }
  }

  render() {
    const {error, loading, displayMessage} = this.props;

    console.log("loading,", loading);

    return (
      <Auxiliary>
        {loading && <div className="gx-loader-view gx-loader-position">
          <CircularProgress/>
        </div>}
        {error && message.error(<span id="message-id">{error}</span>)}
        {displayMessage && message.info(<span id="message-id">{displayMessage}</span>)}
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({common}) => {
  const {error, loading} = common;
  const displayMessage = common.message;
  return {error, loading, displayMessage};
};

export default connect(mapStateToProps, {hideMessage})(InfoView);
