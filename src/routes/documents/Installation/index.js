import React from "react";

import Widget from "components/Widget";
import IntlMessages from "util/IntlMessages";

const Installation = () => {
  return (
    <Widget title={<IntlMessages id="sidebar.documents.installation"/>}>
      <div>

        <h1>Setup Development Envrionment</h1>
        <div className="adocs-section-content ng-binding">
          <p>In order to kickstart the development of your web app with Jumbo React, the very first thing you need to do
            is to setup a react development environment.</p>
          <p>Following tools are needed to setup a react dev environment:</p>

          <ul>
            <li>
              <strong>Node JS</strong><br/>
              <p>NodeJS works as a node package manager behind the scene. It is recommended to download and install the
                latest version of Node JS from its official site <a href="http://nodejs.org/">http://nodejs.org/</a></p>
            </li>
            <li>
              <strong>Yarn</strong><br/>
              <p>Download the latest version of the most loved dependency management tool for react applications from
                its official site <a href="https://yarnpkg.com">https://yarnpkg.com</a> and install it on your machine.
              </p>
            </li>
          </ul>

          <br/>
          <br/>
          <h3>Run React App</h3>

          <ol type="i">
            <li><p>Install node modules use <span className="gx-bg-grey gx-py-1 gx-px-2 gx-rounded-base">$ yarn</span>
              command</p>
            </li>
            <li>
              <p>Run app <span className="gx-bg-grey gx-py-1 gx-px-2 gx-rounded-base">$ yarn start</span> (if app
                compiling slow just comment out some routes in routes.js
                file)</p>
            </li>
            <li>
              <p>For build production files run <span className="gx-bg-grey gx-py-1 gx-px-2 gx-rounded-base">$ yarn build</span>
                (builds to /build/ folder)</p>
            </li>
          </ol>
        </div>
        <br/>
        <br/>
        <h4>
          <a rel="noopener noreferrer" target="_blank" href="http://docs.g-axon.com/wieldy/">Click here for fully
            detailed documentation</a>
        </h4>
      </div>

    </Widget>
  );
};

export default Installation;
