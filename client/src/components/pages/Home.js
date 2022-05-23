import React from "react";
import NavBar from "../modules/NavBar";
import SideBar from "../modules/SideBar";
import ArticlePreview from "../modules/ArticlePreview";

import "./Home.css";

const Home = (props) => {
  return (
    <>
      <NavBar
        pathname={props.directory ? "/articlelist/" + props.directory : "/"}
        userId={props.userId}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
      <div className="MainContainer">
        <SideBar />
        <ArticlePreview directory={props.directory ? props.directory : "all"} />
      </div>
    </>
  );
};

export default Home;
