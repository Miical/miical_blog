import React, { useState, useEffect } from "react";
import "./UploadArticle.css";
import { post } from "../../utilities";

const UploadArticle = () => {
  let article = {
    title: "no title",
    directory: "no directory",
    description: "no description",
    tag: [],
    date: 0,
    content: "none",
  };
  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      article.content = text;
    };
    reader.readAsText(e.target.files[0]);
  };
  const Upload = () => {
    article.date = Date.parse(new Date());
    console.log(article);
    post("/api/article", article);
  };

  return (
    <div className="UploadArticle-container">
      <div className="UploadArticle-titleContainer">
        <div className="UploadArticle-title">Upload Article</div>
      </div>
      <div className="UploadArticle-itemContainer">
        <div>
          <div className="UploadArticle-name">Title</div>
          <input
            className="UploadArticle-input"
            onChange={(val) => {
              article.title = val.target.value;
            }}
          ></input>
        </div>
        <div>
          <div className="UploadArticle-name">Directory</div>
          <input
            className="UploadArticle-input"
            onChange={(val) => {
              article.directory = val.target.value;
            }}
          ></input>
        </div>
        <div>
          <div className="UploadArticle-name">Tag</div>
          <input
            className="UploadArticle-input"
            onChange={(val) => {
              article.tag = val.target.value.split(";").filter((tagVal) => {
                return tagVal.length !== 0;
              });
            }}
          ></input>
        </div>
        <div>
          <div className="UploadArticle-name">Discription</div>
          <input
            className="UploadArticle-input"
            onChange={(val) => {
              article.description = val.target.value;
            }}
          ></input>
        </div>
        <div>
          <div className="UploadArticle-name">Content</div>
          <input type="file" onChange={showFile} className="UploadArticle-selectFile" />
        </div>
        <button className="UploadArticle-button" onClick={Upload}>Upload</button>
      </div>
    </div>
  );
};

export default UploadArticle;
