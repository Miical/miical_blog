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
import { get, post } from "../../utilities";
import { Card, Badge, Spinner } from "react-bootstrap";

/**
 * @param article
 */
const Article = (props) => {
  let date = new Date(props.article.date);
  let tagList = props.article.tag.map((tagName) => (
    <>
      <Badge pill bg="primary">
        {tagName}
      </Badge>{" "}
    </>
  ));
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    get("/api/image", { article: props.article._id }).then((imgListObj) => {
      setImageList(imgListObj);
    });
  }, [props.article._id]);

  let removeArticle = () => {
    post("/api/remove/", { _id: props.article._id });
  };

  return props.article._id ? (
    <Card className="Article-container">
      <Card.Header>
        <Card.Link href={"/articlelist/" + props.article.directory} className="Article-directory">
          {props.article.directory}/ <br />
        </Card.Link>
        <Card.Text className="Article-title">{props.article.title}</Card.Text>
      </Card.Header>
      <Card.Body>
        {tagList}
        <Card.Text className="Article-date">{date.toDateString()}</Card.Text>
      </Card.Body>
      <hr className="Article-line" />
      <Card.Body className="Article-MDcontainer">
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
              else
                return (
                  <div style={{ margin: "50px auto 50px 48%" }}>
                    <Spinner animation="grow" variant="secondary" />
                  </div>
                );
            },
          }}
        />
      </Card.Body>
    </Card>
  ) : (
    <Card className="Article-container">
      <div style={{ margin: "100px auto 100px 48%" }}>
        <Spinner animation="grow" />
      </div>
    </Card>
  );
};

export default Article;
