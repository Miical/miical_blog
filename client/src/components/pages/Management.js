import React from "react";
import NavBar from "../modules/NavBar";
import SideBar from "../modules/SideBar";
import ArticlePreview from "../modules/ArticlePreview";

import "./Management.css";
import NotFound from "./NotFound";

const Management = (props) => {
  return props.userId === "6273e023124e2f0023a579ff" ? (
    <>
      <NavBar
        pathname="/manage"
        userId={props.userId}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
        userName={props.userName}
      />
      <div className="MainContainer">
        <SideBar manage={true} />
        <ArticlePreview manage={true} directory={props.directory ? props.directory : "all"} />
      </div>
    </>
  ) : (
    <NotFound />
  );
};

export default Management;
