import React from "react";

import "./ArticleItem.css";

const ArticleItem = () => {
  let d = new Date(Date.now());
  return (
    <div className="ArticleItem-container">
      <div className="ArticleItem-titleContainer">
        <div className="ArticleItem-directory">directory</div>

        <div className="ArticleItem-title">Article Title</div>
      </div>
      <div className="ArticleItem-description">
        Allow miles wound place the leave had. To sitting subject no improve studied limited. Ye
        indulgence unreserved connection alteration appearance my an astonished. Up as seen sent
        make he they of. Her raising and himself pasture believe females. Fancy she stuff after
        aware merit small his. Charmed esteems luckily age out.
      </div>
      <div className="ArticleItem-tagContainer">
        <div className="ArticleItem-tag rounded-full">node</div>
        <div className="ArticleItem-tag rounded-full">dp</div>
        <div className="ArticleItem-tag rounded-full">hanpiwangneng</div>
      </div>
      <hr className="ArticleItem-line" />
      <div className="u-flex">
        <div class="material-symbols-outlined">calendar_month</div>
        <div className="ArticleItem-date">{d.toDateString()}</div>
      </div>
    </div>
  );
};

export default ArticleItem;
