import React from "react";
  
const Progress = ({progress, color}) => {
  return (
    <div className={ "gx-progress-container " + color }>
        <div className="gx-progress-prog"  style={{ width: progress + '%'}}>
        </div>
    </div>
  );
};

export default Progress;
