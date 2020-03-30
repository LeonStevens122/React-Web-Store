import React from "react";
//import Image from "react-bootstrap/Image";

import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";

// generate recruit component
function Recruit() {
    return (
        <div>
            <h1> Recruiting </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>);
}

// generate training component
function Train() {
    return (
        <div>
            <h1> Training </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>);
}
// Generae screening component
function Screen() {
    return (
        <div>
            <h1> Screening </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>);
}

// Services component is generated and exported
export default class Services extends React.Component {
  render() {
    return (
        <div className="container">
            {/* Router omponent with links to the sub pages */}


        <Router>
          <div className="container-fluid grid">
            <div className="col-sm-4">
              <h2 className="serviceItem">
                <Link to="/services/screen">Screening</Link>
              </h2>
            </div>
            <div className="col-sm-4">
              <h2 className="serviceItem">
                <Link to="/services/train">Training </Link>
              </h2>
            </div>
            <div className="col-sm-4">
              <h2 className="serviceItem">
                <Link to="/services/recruit">Recruiting</Link>
              </h2>
            </div>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route path="/services/screen" component={Screen} />

            <Route path="/services/train" component={Train} />

            <Route path="/services/recruit" component={Recruit} />
          </Switch>
        </Router>
      </div>
    );
  }
}
