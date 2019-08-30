import React from "react";

export function getJobDisplayInfo ( status ) {
    var retVal = {
        title: "",
        color: "white",
        icon: "",       
        action: "" 
    }

    if( status === "scheduled" ) {
        retVal.color = "blue";
        retVal.icon = "event";
        retVal.title = "job.type.scheduled";
        retVal.action = "job.action.scheduled";
    }else if( status === "schedule" ) {
        retVal.color = "blue";
        retVal.icon = "event";
        retVal.title = "job.type.schedule";
        retVal.action = "job.action.schedule";
    }else if( status === "unscheduled" ) {
        retVal.color = "red";
        retVal.icon = "event_busy";
        retVal.title = "job.type.unscheduled";
        retVal.action = "job.action.unscheduled";
    }else if( status === "progress" ) {
        retVal.color = "cyan";
        retVal.icon = "play_arrow";
        retVal.title = "job.type.progress";
        retVal.action = "job.action.progress";
    }else if( status === "on the way" ) {
        retVal.color = "yellow";
        retVal.icon = "local_shipping";
        retVal.title = "job.type.ontheway";
        retVal.action = "job.action.ontheway";
    }else if( status === "cancel" ) {
        retVal.color = "yellow";
        retVal.icon = "cancel";
        retVal.title = "job.type.cancel";
        retVal.action = "job.action.cancel";
    }else if( status === "complete" ) {
        retVal.color = "yellow";
        retVal.icon = "check_box";
        retVal.title = "job.type.complete";
        retVal.action = "job.action.complete";
    }else if( status === "finished" ) {
        retVal.color = "yellow";
        retVal.icon = "stop";
        retVal.title = "job.type.finished";
        retVal.action = "job.action.finished";
    }else if( status === "invoice" ) {
        retVal.color = "yellow";
        retVal.icon = "receipt";
        retVal.title = "job.type.invoice";
        retVal.action = "job.action.invoice";
    }else if( status === "payment" ) {
        retVal.color = "yellow";
        retVal.icon = "local_atm";
        retVal.title = "job.type.payment";
        retVal.action = "job.action.payment";
    }
    return retVal;
}