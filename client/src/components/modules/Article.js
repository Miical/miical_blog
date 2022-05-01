import React, { useState, useEffect } from "react";

import "./Article.css";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "./github-markdown-css/github-markdown.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {coy   } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * @param article
 */
const Article = (props) => {
  let date = new Date(props.article.date);
  let tagList = props.article.tag.map((tagName) => (
    <div className="Article-tag rounded-full">{tagName}</div>
  ));

  const [markdown, setMarkdown] = useState("loading...");
  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      setMarkdown(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  let md =
    "# 这是标题\n" +
    "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
    "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
    "**这是加粗的文字**\n\n" +
    "*这是倾斜的文字*`\n\n" +
    "***这是斜体加粗的文字***\n\n" +
    "~~这是加删除线的文字~~ \n\n" +
    "`console.log(Hello World)` \n\n" +
    "```const a=2; ```";

  return (
    <div className="Article-container">
      <div className="Article-titleContainer">
        <div className="Article-directory">{props.article.directory}/</div>
        <div className="Article-title">{props.article.title}</div>
      </div>
      <div className="Article-tagContainer">{tagList}</div>
      <div className="Article-dateContainer">
        <div class="material-symbols-outlined">calendar_month</div>
        <div className="Article-date">{date.toDateString()}</div>
      </div>
      <hr className="Article-line" />
      <input type="file" onChange={showFile} />
      <div className="Article-MDcontainer">
        <ReactMarkdown
          children={markdown}
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
          }}
        />
      </div>
    </div>
  );
};

export default Article;
