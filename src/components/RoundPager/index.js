import React from "react";

const RoundPager = ({count, index, onChange}) => {
    
    var items = [];
    for (var i = 0; i < count; i++) {
        items.push(i);
    }

    return (
        <div className="gx-div-align-center">
            { items.map ( (item) => (
                <div className={ "gx-dashboard-roundpager" + (index === item ? " selected" : "")} 
                            onClick={() => {onChange(item)}}></div>            
            ))}
        </div>
    )
} 

export default RoundPager;