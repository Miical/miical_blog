import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar";
import SideBar from "../modules/SideBar";
import Article from "../modules/Article";

import "./ArticleView.css";
import { get } from "../../utilities";

let init_article = {
  directory: "no directory",
  title: "no title",
  description:
    "no description",
  tag: ['empty'],
  date: 0,
  content: "no content",
};

/**
 * @param articleId
 */
const ArticleView = (props) => {
  const [article, setArticle] = useState(init_article);

  useEffect(() => {
    get("/api/singlearticle", { articleId: props.articleId }).then((articleObj) => {
      setArticle(articleObj);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="MainContainer">
        <SideBar />
        <Article article={article} />
      </div>
    </>
  );
};

export default ArticleView;
