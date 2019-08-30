import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";
import Editors from "./editors";
import TimeLine from "./timeLine";
import Shuffles from "./Shuffles"

const ExtraComponents = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/editors`}/>
    <Route path={`${match.url}/editor`} component={Editors}/>
    <Route path={`${match.url}/color-picker`} component={asyncComponent(() => import('./ColorPicker'))}/>
    <Route path={`${match.url}/dnd`} component={asyncComponent(() => import('./DragnDrop'))}/>
    <Route path={`${match.url}/sweet-alert`} component={asyncComponent(() => import('./SweetAlert'))}/>
    <Route path={`${match.url}/notification`} component={asyncComponent(() => import('./Notification'))}/>
    <Route path={`${match.url}/time-line`} component={TimeLine}/>
    <Route path={`${match.url}/shuffle`} component={Shuffles}/>

  </Switch>
);

export default ExtraComponents;
