import React from "react";

import {Link} from "react-router-dom";
import Auxiliary from "util/Auxiliary";

const CustomMenuItem = ({link, icon, title}) => {
  if( !link )
    link = "#";
  return (    
    <Auxiliary>
      <Link to={link}>
          <div className="gx-custome-menu-item">
              <div className="gx-custome-menu-back"></div>
              <i className="material-icons">{icon}</i>
              {title}
          </div>
      </Link>
    </Auxiliary>
  );
};

export default CustomMenuItem;

