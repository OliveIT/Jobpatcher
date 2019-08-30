import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const Recharts = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/area`}/>
    <Route path={`${match.url}/area`} component={asyncComponent(() => import('./area'))}/>
    <Route path={`${match.url}/bar`} component={asyncComponent(() => import('./bar'))}/>
    <Route path={`${match.url}/composed`} component={asyncComponent(() => import('./composed'))}/>
    <Route path={`${match.url}/line`} component={asyncComponent(() => import('./line'))}/>
    <Route path={`${match.url}/pie`} component={asyncComponent(() => import('./pie'))}/>
    <Route path={`${match.url}/radar`} component={asyncComponent(() => import('./radar'))}/>
    <Route path={`${match.url}/radial`} component={asyncComponent(() => import('./radial'))}/>
    <Route path={`${match.url}/scatter`} component={asyncComponent(() => import('./scatter'))}/>
    <Route path={`${match.url}/treemap`} component={asyncComponent(() => import('./treemap'))}/>
  </Switch>
);

export default Recharts;
