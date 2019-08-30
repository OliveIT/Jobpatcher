import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const GoogleMap = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/simple`}/>
    <Route path={`${match.url}/directions`} component={asyncComponent(() => import('./directions'))}/>
    <Route path={`${match.url}/drawing`} component={asyncComponent(() => import('./drawingView'))}/>
    <Route path={`${match.url}/event`} component={asyncComponent(() => import('./eventHanlder'))}/>
    <Route path={`${match.url}/geo-location`} component={asyncComponent(() => import('./geoLocation'))}/>
    <Route path={`${match.url}/kml`} component={asyncComponent(() => import('./kmLayer'))}/>
    <Route path={`${match.url}/clustering`} component={asyncComponent(() => import('./mapClustering'))}/>
    <Route path={`${match.url}/overlay`} component={asyncComponent(() => import('./mapOverlay'))}/>
    <Route path={`${match.url}/popup-info`} component={asyncComponent(() => import('./popUpInfo'))}/>
    <Route path={`${match.url}/simple`} component={asyncComponent(() => import('./simple'))}/>
    <Route path={`${match.url}/street-view`} component={asyncComponent(() => import('./streetView'))}/>
    <Route path={`${match.url}/styled`} component={asyncComponent(() => import('./styled'))}/>
    <Route path={`${match.url}/traffic`} component={asyncComponent(() => import('./trafficLayer'))}/>
  </Switch>
);

export default GoogleMap;



