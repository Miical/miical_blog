import React, { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import { get } from "../../utilities";
import { Spinner } from "react-bootstrap";

import "./ArticlePreview.css";

/**
 * @param directory
 */
const ArticlePreview = (props) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    get("/api/articlelist", { directory: props.directory }).then((storiesObj) => {
      setArticles(storiesObj);
    });
  }, [props.directory]);

  let articlesList = null;
  if (articles.length !== 0) {
    articles.sort((a, b) => b.date - a.date);
    articlesList = articles.map((articleObj) => (
      <ArticleItem manage={props.manage} article={articleObj} />
    ));
  } else {
    articlesList = null;
  }

  return (
    <div className="ArticlePreview-container">
      {articlesList ? (
        articlesList
      ) : (
        <div style={{ margin: "100px auto auto 48%" }}>
          <Spinner animation="grow" />
        </div>
      )}
    </div>
  );
};

export default ArticlePreview;
