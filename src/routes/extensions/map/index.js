import React from "react";
import {Route, Switch} from "react-router-dom";

import AmMap from './ammap';
import GoogleMap from './googlemap';

const Maps = ({match}) => (
  <Switch>
    <Route path={`${match.url}/google`} component={GoogleMap}/>
    <Route path={`${match.url}/ammap`} component={AmMap}/>
  </Switch>
);

export default Maps;
