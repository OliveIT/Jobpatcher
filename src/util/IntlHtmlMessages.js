import React from "react";
import {FormattedHTMLMessage, injectIntl} from "react-intl";

const InjectMassage = props => <FormattedHTMLMessage {...props} />;
export default injectIntl(InjectMassage, {
  withRef: false
});
