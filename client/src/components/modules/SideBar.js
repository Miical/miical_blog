import React from "react";
import ProfileCard from "./ProfileCard";
import ArticleList from "./ArticleList";
import UploadArticle from "./UploadArticle";
import "./SideBar.css";


const SideBar = (props) => {
  (function () {
    let iE6 = window.ActiveXObject && !window.XMLHttpRequest;
    if (!iE6) {
      window.onscroll = function () {
        let oDiv = document.getElementById("SideBar-adapter");
        let screenH = document.documentElement.scrollTop + window.innerHeight;
        let divH = oDiv.clientHeight;
        if (screenH > divH) {
          oDiv.style.position = "sticky";
          oDiv.style.top = window.innerHeight - divH - 70 + "px";
        } else {
          oDiv.style.position = "relative";
          oDiv.style.top = 0;
        }
      };
    }
  })();
  return (
    <div className="SideBar-adapter" id="SideBar-adapter">
      <ProfileCard />
      <ArticleList />
      <UploadArticle manage={props.manage}/>
    </div>
  );
};

export default SideBar;
