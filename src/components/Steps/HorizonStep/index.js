import React, {Component} from "react";

import IntlMessages from "util/IntlMessages";

const HorizonStep = ({stepTitles, current, style}) => {
    return (
        <div className="gx-horizon-steps" style={style}>
            {
                stepTitles.map( (step, index) => (
                    <div key={index} className="gx-div-align-center">
                        {index < (current - 1) &&
                            <div className="gx-horizon-steps-item check">
                                <div className="gx-horizon-steps-check">
                                    <i className="material-icons">check</i>            
                                </div>
                                <div><IntlMessages id={step} /></div>
                            </div>
                        }
                        {index == (current - 1) &&
                            <div className="gx-horizon-steps-item current">
                                <div className="gx-horizon-steps-current">
                                    {index + 1}
                                </div>
                                <div><IntlMessages id={step} /></div>
                            </div>
                        }
                        {index > (current - 1) &&
                            <div className="gx-horizon-steps-item nopass">
                                <div className="gx-horizon-steps-nopass">
                                    {index + 1}       
                                </div>
                                <div><IntlMessages id={step} /></div>
                            </div>
                        }
                        {index < (stepTitles.length - 1) &&
                            <div className={ "gx-horizon-steps-seperator" + (index < (current - 1) ? " passed" : "")}>
                                <i className="material-icons">chevron_right</i> 
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default HorizonStep;
