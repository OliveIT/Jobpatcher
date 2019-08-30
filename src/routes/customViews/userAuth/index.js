import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const AppModule = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/login`}/>
    <Route path={`${match.url}/sign-in`} component={asyncComponent(() => import('./SignIn'))}/>
    <Route path={`${match.url}/sign-up`} component={asyncComponent(() => import('./SignUp'))}/>
    <Route path={`${match.url}/forgot-password`} component={asyncComponent(() => import('./ForgotPassword'))}/>
    <Route path={`${match.url}/lock-screen`} component={asyncComponent(() => import('./LockScreen'))}/>
    <Route path={`${match.url}/reset-password`} component={asyncComponent(() => import('./ResetPassword'))}/>
  </Switch>
);

export default AppModule;
