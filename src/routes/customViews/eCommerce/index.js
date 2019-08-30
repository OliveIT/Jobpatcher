import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const eCommerce = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/products-list`}/>
    <Route path={`${match.url}/product-list`}
           component={asyncComponent(() => import('./ProductList'))}/>
    <Route path={`${match.url}/product-grid`}
           component={asyncComponent(() => import('./ProductGrid'))}/>
  </Switch>
);

export default eCommerce;
