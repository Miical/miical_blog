import React from "react";
import ProfileCard from "./ProfileCard";
import ArticleList from "./ArticleList";
import "./SideBar.css"

const SideBar= () => {
  return (
    <div className="SideBar-adapter">
      <ProfileCard />
      <ArticleList />
    </div>
  );
};

export default SideBar;
