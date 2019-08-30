import React from "react";

import {Button } from "antd";
import IntlMessages from "util/IntlMessages";
import IntlHtmlMessages from "util/IntlHtmlMessages";

const PurchaseFailed = ({email}) => {
    return (
        <div className="gx-div-center gx-text-center">
            <img src={require("assets/images/membership/payment_failed.png")}  className="gx-mb-30"/>
            <div className="gx-fs-xxl gx-font-weight-semi-bold gx-text-header gx-mb-10">
                <IntlMessages id="membership.purchase.purchase.failed.title" />
            </div>
            <div className="gx-fs-18 gx-font-weight-semi-bold gx-tip" style={{marginBottom: '24px'}}>
                <IntlMessages id="membership.purchase.purchase.failed.sub" />
            </div>
            <div className="gx-fs-md gx-font-weight-medium gx-text-header gx-mb-2" >
                <IntlHtmlMessages id="membership.purchase.purchase.failed.info"/>
            </div>
            <div className="gx-fs-sm gx-text-grey gx-mb-30" >
                <IntlMessages id="membership.purchase.purchase.failed.tip"  values={{email: email}}/>
            </div>
            <Button className="gx-fs-md" style={{width: '185px',height: '45px'}} type="primary">            
                <IntlMessages id="membership.purchase.purchase.failed.tryagain" />
            </Button>
        </div>
    )
}

export default PurchaseFailed;