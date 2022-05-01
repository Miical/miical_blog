import React from "react";
import { Link } from "@reach/router";

import "./ArticleItem.css";

/**
 * @param article
 */
const ArticleItem = (props) => {
  let date = new Date(props.article.date);
  let tagList = props.article.tag.map((tagName) => (
      <div className="ArticleItem-tag rounded-full">{tagName}</div>
  ));
  return (
    <div className="ArticleItem-container">
      <div className="ArticleItem-titleContainer">
        <div className="ArticleItem-directory">{props.article.directory}/</div>
        <Link to={"/article/" + props.article.title} className="ArticleItem-title">{props.article.title}</Link>
      </div>
      <div className="ArticleItem-description">
        {props.article.description}
      </div>
      <div className="ArticleItem-tagContainer">
        {tagList}
      </div>
      <hr className="ArticleItem-line" />
      <div className="u-flex">
        <div class="material-symbols-outlined">calendar_month</div>
        <div className="ArticleItem-date">{date.toDateString()}</div>
      </div>
    </div>
  );
};

export default ArticleItem;
