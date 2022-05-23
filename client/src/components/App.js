import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import "../utilities.css";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";
import Home from "./pages/Home.js";
import ArticleView from "./pages/ArticleView.js";

import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [userName, setUserName] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        setUserName(user.name)
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    setUserName(res.profileObj.name);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <Router>
        <Skeleton
          path="/skeleton"
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          userId={userId}
        />
        <ArticleView
          path="/article/:_id"
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          userId={userId}
          userName={userName}
        />
        <Home
          path="/articlelist/:directory"
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          userId={userId}
          userName={userName}
        />
        <Home
          path="/"
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          userId={userId}
          userName={userName}
        />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
