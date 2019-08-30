import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const SocialApps = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/contacts`}/>
    <Route path={`${match.url}/profile`} component={asyncComponent(() => import('./Profile'))}/>
    <Route path={`${match.url}/wall`} component={asyncComponent(() => import('./Wall'))}/>
  </Switch>
);

export default SocialApps;
