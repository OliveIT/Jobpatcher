import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const Editors = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/ck`}/>
    <Route path={`${match.url}/ck`} component={asyncComponent(() => import('./CK'))}/>
    <Route path={`${match.url}/wysiswyg`} component={asyncComponent(() => import('./WYSISWYG'))}/>
  </Switch>
);

export default Editors;
