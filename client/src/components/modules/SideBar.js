import React from "react";
import ProfileCard from "./ProfileCard";
import ArticleList from "./ArticleList";
import UploadArticle from "./UploadArticle";
import "./SideBar.css"

const SideBar= () => {
  return (
    <div className="SideBar-adapter">
      <ProfileCard />
      <ArticleList />
      <UploadArticle />
    </div>
  );
};

export default SideBar;
