import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar";
import SideBar from "../modules/SideBar";
import Article from "../modules/Article";

import "./ArticleView.css";
import { get } from "../../utilities";

let init_article = {
  _id: "",
  directory: "no directory",
  title: "no title",
  description: "no description",
  tag: ["empty"],
  date: 0,
  content: "no content",
};

/**
 * @param articleId
 */
const ArticleView = (props) => {
  const [article, setArticle] = useState(init_article);

  useEffect(() => {
    get("/api/article", { _id: props._id }).then((articleObj) => {
      setArticle(articleObj);
    });
  }, [props._id]);

  return (
    <>
      <NavBar
        pathname={"/article/" + props._id}
        userId={props.userId}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
      <div className="MainContainer">
        <SideBar article={article} />
        <Article article={article} />
      </div>
    </>
  );
};

export default ArticleView;
