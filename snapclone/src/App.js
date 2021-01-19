import React from "react";

import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";

function App() {
  return (
    <div className="app">
      <Router className="app__body">
        <Switch>
          <Route path="/" exact>
            <WebcamCapture />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route path="/chats">
            <Chats />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
