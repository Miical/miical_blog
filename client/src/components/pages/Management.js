import React from "react";
import NavBar from "../modules/NavBar";
import SideBar from "../modules/SideBar";
import ArticlePreview from "../modules/ArticlePreview";

import "./Management.css";

const Management = (props) => {
  return (
    <>
      <NavBar
        pathname="/manage"
        userId={props.userId}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
        userName={props.userName} 
      />
      <div className="MainContainer">
        <SideBar manage={true}/>
        <ArticlePreview manage={true} directory={props.directory ? props.directory : "all"} />
      </div>
    </>
  );
};

export default Management;
