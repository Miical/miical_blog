import React from "react";
import NavBar from "../modules/NavBar";
import SideBar from "../modules/SideBar";
import Article from "../modules/Article";

import "./ArticleView.css"

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

const ArticleView = () => {
  return (
    <>
      <NavBar />
      <div className="MainContainer">
        <SideBar />
        <Article article={ArticleList1[0]}/>
      </div>
    </>
  );
};

export default ArticleView;
