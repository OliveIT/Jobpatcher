import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const TimeLine = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/default`}/>
    <Route path={`${match.url}/default`} component={asyncComponent(() => import('./Default'))}/>
    <Route path={`${match.url}/default-with-icon`}
           component={asyncComponent(() => import('./DefaultWithIcon'))}/>
    <Route path={`${match.url}/left-align`} component={asyncComponent(() => import('./LeftAligned'))}/>
  </Switch>
);

export default TimeLine;
