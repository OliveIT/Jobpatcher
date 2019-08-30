
import React from "react";
import IntlMessages from "util/IntlMessages";

export function showAddress ( address ) {
    if(address.street === '') {
        return (
            <div className="gx-text-grey"><IntlMessages id="customer.profile.notavailable"/></div>
        );
    } 
    return (
        <div className="gx-pb-2">
            <span>{ address.street }</span>
            <br/>
            <span>{ address.city + ", " + address.statecode + " " + address.zipcode }</span>
        </div>
    );    
}