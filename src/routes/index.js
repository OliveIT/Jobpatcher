import React from "react";
import {Route, Switch} from "react-router-dom";

import Components from "./components/index";
import CustomViews from "./customViews/index";
import Extensions from "./extensions/index";
import ExtraComponents from "./extraComponents/index";
import InBuiltApps from "./inBuiltApps/index";
import SocialApps from "./socialApps/index";
import Main from "./main/index";
import Documents from "./documents/index";


const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}main`} component={Main}/>
      <Route path={`${match.url}components`} component={Components}/>
      <Route path={`${match.url}custom-views`} component={CustomViews}/>
      <Route path={`${match.url}extensions`} component={Extensions}/>
      <Route path={`${match.url}extra-components`} component={ExtraComponents}/>
      <Route path={`${match.url}in-built-apps`} component={InBuiltApps}/>
      <Route path={`${match.url}social-apps`} component={SocialApps}/>
      <Route path={`${match.url}documents`} component={Documents}/>
    </Switch>
  </div>
);

export default App;
