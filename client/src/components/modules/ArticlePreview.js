import React from "react";
import ArticleItem from "./ArticleItem";

import "./ArticlePreview.css";

let ArticleList1 = [
  {
    directory: "study_notes",
    title: "article title1",
    description:
      " allow miles wound place the leave had. to sitting subject no improve studied limited. ye indulgence unreserved connection alteration appearance my an astonished. up as seen sent make he they of. her raising and himself pasture believe females. fancy she stuff after aware merit small his. charmed esteems luckily age out.",
    tag: ["王宁", "是", "憨批", "哈哈"],
    date: 324523434,
    content: "dhdsihfiusdhfiuhi"
  }, {
    directory: "study_notes",
    title: "article title2",
    description:
      " allow miles wound place the leave had. to sitting subject no improve studied limited. ye indulgence unreserved connection alteration appearance my an astonished. up as seen sent make he they of. her raising and himself pasture believe females. fancy she stuff after aware merit small his. charmed esteems luckily age out.",
    tag: ["dp", "note", "hanpi"],
    date: 324523434,
    content: "dhdsihfiusdhfiuhi"
  }
];

/**
 * @param directory
 */
const ArticlePreview = () => {
  return (
    <div className="ArticlePreview-container">
      <ArticleItem article={ArticleList1[1]}/>
      <ArticleItem article={ArticleList1[0]}/>
      <ArticleItem article={ArticleList1[1]}/>
    </div>
  );
};

export default ArticlePreview;
