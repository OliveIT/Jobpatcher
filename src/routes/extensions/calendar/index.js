import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const Calendar = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`}/>
    <Route path={`${match.url}/basic`} component={asyncComponent(() => import('./basic/'))}/>
    <Route path={`${match.url}/cultures`} component={asyncComponent(() => import('./cultures/'))}/>
    <Route path={`${match.url}/popup`} component={asyncComponent(() => import('./popup/'))}/>
    <Route path={`${match.url}/rendering`} component={asyncComponent(() => import('./rendering/'))}/>
    <Route path={`${match.url}/selectable`} component={asyncComponent(() => import('./selectable/'))}/>
    <Route path={`${match.url}/timeslots`} component={asyncComponent(() => import('./timeslots/'))}/>
  </Switch>
);

export default Calendar;
