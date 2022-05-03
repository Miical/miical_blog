import React, { useState, useEffect } from "react";

import "./Article.css";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "./github-markdown-css/github-markdown-light.css";
import { Link } from "@reach/router";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { get } from "../../utilities";

/**
 * @param article
 */
const Article = (props) => {
  let date = new Date(props.article.date);
  let tagList = props.article.tag.map((tagName) => (
    <div className="Article-tag rounded-full">{tagName}</div>
  ));
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    get("/api/image", { article: props.article._id }).then((imgListObj) => {
      setImageList(imgListObj);
    });
  }, [props.article._id]);

  return (
    <div className="Article-container">
      <div className="Article-titleContainer">
        <Link to={"/articlelist/" + props.article.directory} className="Article-directory">{props.article.directory}/</Link>
        <div className="Article-title">{props.article.title}</div>
      </div>
      <div className="Article-tagContainer">{tagList}</div>
      <div className="Article-dateContainer">
        <div class="material-symbols-outlined">calendar_month</div>
        <div className="Article-date">{date.toDateString()}</div>
      </div>
      <hr className="Article-line" />
      <div className="Article-MDcontainer">
        <ReactMarkdown
          children={props.article.content}
          escapeHtml={false}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          className="markdown-body"
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={coy}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            img: ({ src, ...props }) => {
              let img = imageList.find((imgobj) => imgobj.name === src.split("/")[1]);
              if (img) return <img src={img.data} className="Article-img" />;
              else return <div>image not found</div>;
            },
          }}
        />
      </div>
    </div>
  );
};

export default Article;
