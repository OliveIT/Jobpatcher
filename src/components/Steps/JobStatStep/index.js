import React, {Component} from "react";

import IntlMessages from "util/IntlMessages";
import {getJobDisplayInfo} from "util/JobStatus";
import {changeDateTimeFormat} from "util/DateTime";
import Auxiliary from "util/Auxiliary";

const steps_data = [
    'schedule',
    'on the way',
    'progress',
    'finished',
    'invoice',
    'payment',
];

const JobStatStep = ({times, current}) => {
    return (
        <div className="gx-job-stat-steps">
        {
            steps_data.map( (step, index) => {
                const stepInfo = getJobDisplayInfo( step );
                var style = "";
                if( index <= current - 1 )
                    style = "check";

                return (
                <div key={index} className="gx-job-stat-steps-item-wrapper">
                    <div className={"gx-job-stat-steps-item " + style }>
                        <div className="gx-job-stat-steps-icon">
                            <i className="material-icons">{stepInfo.icon}</i>            
                        </div>
                        <div className="gx-mt-10">
                            <IntlMessages id={stepInfo.title} />
                        </div>
                        { index <= current - 1 &&
                        <Auxiliary>
                            <div className="gx-fs-11 gx-text-normal gx-mt-2">
                                {times && times[index] &&
                                    changeDateTimeFormat( times[index] )
                                }
                            </div>               
                            <div className="gx-fs-11 gx-text-grey gx-mt-2">
                                <IntlMessages id="job.action.undo" />
                            </div>
                        </Auxiliary>
                        }         
                        { index > current - 1 &&
                        <div className="gx-fs-11 gx-text-grey gx-mt-2">
                            <IntlMessages id={stepInfo.action} />
                        </div>
                        }
                    </div>
                        
                    {index > 0 &&
                        <div className={ "gx-job-stat-steps-seperator" + (index <= (current - 1) ? " passed" : "")}>
                        </div>
                    }
                </div>
            )})
        }
        </div>
    );
}

export default JobStatStep;
