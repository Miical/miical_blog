import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "@reach/router";

import "./ArticleItem.css";

/**
 * @param article
 */
const ArticleItem = (props) => {
  let date = new Date(props.article.date);
  let tagList = props.article.tag.map((tagName) => (
    <>
      <Badge pill bg="primary">
        {tagName}
      </Badge>{" "}
    </>
  ));
  return (
    <Card className="ArticleItem-Card">
      <Card.Header>
        <Card.Link
          href={"/articlelist/" + props.article.directory}
          className="ArticleItem-directory"
        >
          {props.article.directory}/ <br />
        </Card.Link>
        <Card.Link href={"/article/" + props.article._id} className="ArticleItem-title">
          {props.article.title}
        </Card.Link>
      </Card.Header>
      <Card.Body>{tagList}</Card.Body>
      <Card.Footer className="ArticleItem-date">{date.toDateString()}</Card.Footer>
    </Card>
  );
};

export default ArticleItem;
