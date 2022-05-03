import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./ArticleList.css";
import { get } from "../../utilities";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    get("/api/articlelist", {directory: "all"}).then((articlesObj) => {
      setArticles(articlesObj);
    });
  }, []);

  let dirList = [];
  for (let article of articles) {
    let dir = dirList.find((dir)=>(dir.directory === article.directory)); 
    if (!dir) 
      dirList.push({directory: article.directory, number: 1});
    else 
      dir.number++;
  }
      
  let dirItemList = null;
  if (dirList.length !== 0) {
    dirList.sort((x, y)=>(x.directory > y.directory? 1: -1));
    dirItemList = dirList.map( (dirItem) => (
      <Link to={"/articlelist/" + dirItem.directory} className="ArticleListItem-container">
        <div className="ArticleListItem-name">{dirItem.directory}</div>
        <div className="ArticleListItem-number">({dirItem.number})</div>
      </Link>
    ));
  } else{
    dirItemList = <div>no direcotry!</div>;
  }
  
  return (
    <div className="ArticleList-container">
      <div className="ArticleList-titleContainer">
        <div className="ArticleList-title">Article List</div>
      </div>
      <div className="ArticleList-itemContainer">
        <Link to={"/articlelist/all"} className="ArticleListItem-container font-semibold">
          <div className="ArticleListItem-name">All</div>
          <div className="ArticleListItem-number">({articles.length})</div>
        </Link>

        {dirItemList}
      </div>
    </div>
  );
};

export default ArticleList;
