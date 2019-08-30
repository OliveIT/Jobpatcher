import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";


const Pages = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/error-404`}/>
    <Route path={`${match.url}/error-404`} component={asyncComponent(() => import('./404'))}/>
    <Route path={`${match.url}/error-500`} component={asyncComponent(() => import('./500'))}/>
  </Switch>
);

export default Pages;
