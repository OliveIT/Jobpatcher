import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const Documents = ({match}) => (
  <Switch>
    <Route path={`${match.url}/changelog`} component={asyncComponent(() => import('./ChangeLogs/'))}/>
    <Route path={`${match.url}/installation`} component={asyncComponent(() => import('./Installation/'))}/>

  </Switch>
);

export default Documents;
