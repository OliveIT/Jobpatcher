import React from "react";
import {Route, Switch} from "react-router-dom";
import Dashboard from "./dashboard";
import Customers from "./Customers";
import CustomerProfile from "./Customers/CustomerProfile";
import Dispatch from "./Dispatch";
import DispatchSchedule from "./Dispatch/DispatchSchedule";
import Job from "./Job";

const Main = ({match}) => (
  <Switch>
    <Route path={`${match.url}/dashboard`} component={Dashboard}/>
    <Route path={`${match.url}/customers/profile`} component={CustomerProfile}/>
    <Route path={`${match.url}/customers`} component={Customers}/>
    <Route path={`${match.url}/dispatch/schedule`} component={DispatchSchedule}/>
    <Route path={`${match.url}/dispatch/job`} component={Job}/>
    <Route path={`${match.url}/dispatch`} component={Dispatch}/>
  </Switch>
);

export default Main;
