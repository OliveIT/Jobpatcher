import React from "react";
import {Route, Switch} from "react-router-dom";

import Charts from "./charts/index";
import Calendar from "./calendar";
import Maps from "./map";

const Extensions = ({match}) => (
  <Switch>
    <Route path={`${match.url}/map`} component={Maps}/>
    <Route path={`${match.url}/chart`} component={Charts}/>
    <Route path={`${match.url}/calendar`} component={Calendar}/>
  </Switch>
);

export default Extensions;
