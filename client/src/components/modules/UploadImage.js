import React, { useState, useEffect } from "react";
import "./UploadImage.css";
import { post } from "../../utilities";

const UploadImage = (props) => {
  let image = {
    name: "",
    article: "",
    data: "",
  };
  const showFile = (e) => {
    var files = e.target.files;
    var filesArray = [].slice.call(files);
    filesArray.forEach((e) => {
      image.name = e.name;
    });
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      image.data = text;
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const Upload = () => {
    image.article = props.article._id;
    post("/api/image", image);
  };

  if (!props.article) {
    return null;
  } else
    return (
      <div className="UploadImage-container">
        <div className="UploadImage-titleContainer">
          <div className="UploadImage-title">Upload image for "{props.article.title}"</div>
        </div>
        <div>
          <div className="UploadArticle-name"></div>
        </div>
        <div className="UploadImage-name">Select Image</div>
        <input
          type="file"
          // multiple="multiple"
          onChange={showFile}
          className="UploadImage-selectFile"
        />
        <button className="UploadImage-button" onClick={Upload}>
          Upload
        </button>
      </div>
    );
};

export default UploadImage;
