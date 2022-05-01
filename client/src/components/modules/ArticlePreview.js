import React, { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import { get } from "../../utilities";

import "./ArticlePreview.css";


/**
 * @param directory
 */
const ArticlePreview = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    get("/api/articles").then((storiesObj) => {
      setArticles(storiesObj);
    });
  }, []);

  let articlesList = null;
  if (articles.length !== 0) {
    articlesList = articles.map( (articleObj) => (
      <ArticleItem article={articleObj}/>
    ));
  } else{
    articlesList = <div>No article!</div>;
  }
  

  return (
    <div className="ArticlePreview-container">
      {articlesList}
    </div>
  );
};

export default ArticlePreview;
