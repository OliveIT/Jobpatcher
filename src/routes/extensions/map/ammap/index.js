import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const AmMap = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/animations-lines`}/>
    <Route path={`${match.url}/animations-lines`} component={asyncComponent(() => import('./animationsLines'))}/>
    <Route path={`${match.url}/curved-lines`} component={asyncComponent(() => import('./curvedLines'))}/>
    <Route path={`${match.url}/zooming-countries`} component={asyncComponent(() => import('./zoomingCountries'))}/>
    <Route path={`${match.url}/patterns`} component={asyncComponent(() => import('./patterns'))}/>
    <Route path={`${match.url}/capitals-map`} component={asyncComponent(() => import('./capitalsMap'))}/>
    <Route path={`${match.url}/map-markers`} component={asyncComponent(() => import('./mapMarkers'))}/>
    <Route path={`${match.url}/flight-routes`} component={asyncComponent(() => import('./flightRoutes'))}/>
    <Route path={`${match.url}/choropleth`} component={asyncComponent(() => import('./choropleth'))}/>
    <Route path={`${match.url}/grouped-countries`} component={asyncComponent(() => import('./groupedCountries'))}/>
    <Route path={`${match.url}/bubbles`} component={asyncComponent(() => import('./bubbles'))}/>
    <Route path={`${match.url}/drill-down`} component={asyncComponent(() => import('./drillDown'))}/>
    <Route path={`${match.url}/multiple-areas`} component={asyncComponent(() => import('./multipleAreas'))}/>
    <Route path={`${match.url}/weather`} component={asyncComponent(() => import('./weather'))}/>

  </Switch>
);

export default AmMap;


