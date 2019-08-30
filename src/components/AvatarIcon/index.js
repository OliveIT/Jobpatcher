import React from "react";

const AvatarIcon = ({icon, color, fontsize, className}) => {
    if( fontsize == "" )
        fontsize = 16;
    return (
    <div className={"gx-icon-avatar " + className } style={{backgroundColor: color}}>
        <i className="material-icons gx-w-100 gx-text-center" style={{color: 'white', fontSize: fontsize + "px" }}>
            { icon }
        </i>                                            
    </div>
    );
}

export default AvatarIcon;