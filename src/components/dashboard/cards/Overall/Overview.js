import React from "react";
import OverviewWelcome from "./OverViewWelcome";
import OverviewJobList from "./OverviewJobList";

const Overview = () => {
    return (
        <div className="gx-dashboard-overall-panel gx-h-100">
            <div className="gx-flex-1-same" >
                <OverviewWelcome name="Peter Jackson" />
            </div>
            <div className="gx-flex-1-same">
                <OverviewJobList />
            </div>
        </div>
    )
}

export default Overview;