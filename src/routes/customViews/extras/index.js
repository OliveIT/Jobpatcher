import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";


const ExtraElements = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/pricing-table`}/>
    <Route path={`${match.url}/pricing-table`} component={asyncComponent(() => import('./pricingTable'))}/>
    <Route path={`${match.url}/callouts`} component={asyncComponent(() => import('./callouts'))}/>
    <Route path={`${match.url}/testimonials`} component={asyncComponent(() => import('./testimonials'))}/>
  </Switch>
);

export default ExtraElements;
