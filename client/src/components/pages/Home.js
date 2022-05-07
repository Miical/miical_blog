import React from "react";
import NavBar from "../modules/NavBar";
import SideBar from "../modules/SideBar";
import ArticlePreview from "../modules/ArticlePreview";

import "./Home.css";

const Home = (props) => {
  return (
    <>
      <NavBar pathname={props.directory? "/articlelist/"+props.directory: "/"}/>
      <div className="MainContainer">
        <SideBar />
        <ArticlePreview directory={props.directory? props.directory: "all"}/>
      </div>
    </>
  );
};

export default Home;
