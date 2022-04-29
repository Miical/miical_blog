import React from "react";
import NavBar from "../modules/NavBar";
import SideBar from "../modules/SideBar";
import ArticlePreview from "../modules/ArticlePreview";

import "./Home.css"

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="MainContainer">
        <SideBar />
        <ArticlePreview />
      </div>
    </>
  );
};

export default Home;
