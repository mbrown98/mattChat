import React from "react";

import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/appSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Switch>
              <Route path="/" exact>
                <WebcamCapture />
              </Route>
              <Route path="/chats/view">
                <ChatView />
              </Route>
              <Route path="/preview">
                <Preview />
              </Route>
              <Route path="/chats">
                <Chats />
              </Route>
            </Switch>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
