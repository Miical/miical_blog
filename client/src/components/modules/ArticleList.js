import React from "react";

import "./ArticleList.css";
import ArticleListItem from "./ArticleListItem";

const ArticleList = () => {
  
  return (
    <div className="ArticleList-container">
      <div className="ArticleList-titleContainer">
        <div className="ArticleList-title">Article List</div>
      </div>
      <div className="ArticleList-itemContainer">
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
        <ArticleListItem ItemName="study notes" ArticleNumber="22"/>
      </div>
    </div>
  );
};

export default ArticleList;
