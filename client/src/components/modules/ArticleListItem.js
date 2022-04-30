import React from "react";

import "./ArticleListItem.css";

/**
 * @param ItemName
 * @param ArticleNumber
 */
const ArticleListItem = (props) => {
  return (
    <div className="ArticleListItem-container">
      <div className="ArticleListItem-name">{props.ItemName}</div>
      <div className="ArticleListItem-number">({props.ArticleNumber})</div>
    </div>
  );
};

export default ArticleListItem;
