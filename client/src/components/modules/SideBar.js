import React from "react";
import ProfileCard from "./ProfileCard";
import ArticleList from "./ArticleList";
import UploadArticle from "./UploadArticle";
import UploadImage from "./UploadImage";
import "./SideBar.css"

const SideBar= () => {
  (function(){    
      let oDiv=document.getElementById("SideBar-adapter");    
      let Y=oDiv;    
      while(Y){Y=Y.offsetParent};    
      let iE6=window.ActiveXObject&&!window.XMLHttpRequest;    
      if(!iE6){    
          window.onscroll=function()    
          {    
            let screenH = document.documentElement.scrollTop + window.innerHeight;
            let divH = oDiv.clientHeight;
            if (screenH > divH) {
              oDiv.style.position = "sticky";
              oDiv.style.top = window.innerHeight-divH +"px";
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
      <UploadArticle />
      <UploadImage />
    </div>
  );
};

export default SideBar;
