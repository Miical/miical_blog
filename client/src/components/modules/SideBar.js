import React from "react";
import ProfileCard from "./ProfileCard";
import ArticleList from "./ArticleList";
import UploadArticle from "./UploadArticle";
import UploadImage from "./UploadImage";
import "./SideBar.css"

const SideBar= () => {
  return (
    <div className="SideBar-adapter">
      <ProfileCard />
      <ArticleList />
      <UploadArticle />
      <UploadImage />
    </div>
  );
};

export default SideBar;
