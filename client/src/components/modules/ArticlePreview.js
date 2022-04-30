import React from "react";
import ArticleItem from "./ArticleItem";

import "./ArticlePreview.css";

const ArticlePreview = () => {
  return (
    <div className="ArticlePreview-container">
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
    </div>
  );
};

export default ArticlePreview;
