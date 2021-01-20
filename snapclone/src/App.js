import React, { useEffect } from "react";

import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className="app__logo"
              src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
              alt="snapLogo"
            />
            <div className="app__body">
              <div className="app__bodyBackground">
                {" "}
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
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
