import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const CustomViews = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/simple-list`}/>
    <Route path={`${match.url}/simple-list`} component={asyncComponent(() => import('./sample'))}/>
    <Route path={`${match.url}/strip-list`} component={asyncComponent(() => import('./strip'))}/>
    <Route path={`${match.url}/card-list`} component={asyncComponent(() => import('./card'))}/>
  </Switch>
);

export default CustomViews;
