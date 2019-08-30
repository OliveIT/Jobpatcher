import React from "react";
  
const TwoProgress = ({progress, first, second}) => {
  return (
    <div className={"gx-two-progress-container bg-" + second}>
        <div className={"gx-two-progress-prog bg-" + first} style={{width: progress + '%'}}>
        </div>
    </div>
  );
};

export default TwoProgress;
