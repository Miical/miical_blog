import React, { useState, useEffect } from "react";

import "./Article.css";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSanitize from "rehype-sanitize";
import "./github-markdown-css/github-markdown.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * @param article
 */
const Article = (props) => {
  let date = new Date(props.article.date);
  let tagList = props.article.tag.map((tagName) => (
    <div className="Article-tag rounded-full">{tagName}</div>
  ));

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
      <div className="Article-MDcontainer">
        <ReactMarkdown
          children={props.article.content}
          escapeHtml={false}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeSanitize]}
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
