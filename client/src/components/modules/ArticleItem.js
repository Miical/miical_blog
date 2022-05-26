import React, { useState, useEffect } from "react";
import { Card, Badge, Button, Modal } from "react-bootstrap";
import { Link } from "@reach/router";
import { post } from "../../utilities";

import "./ArticleItem.css";

/**
 * @param article
 */
const ArticleItem = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let removeArticle = () => {
    post("/api/remove/", { _id: props.article._id });
    handleClose();
  };

  let date = new Date(props.article.date);
  let tagList = props.article.tag.map((tagName) => (
    <>
      <Badge pill bg="primary">
        {tagName}
      </Badge>{" "}
    </>
  ));
  return (
<>
    <Card className="ArticleItem-Card">
      <Card.Header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Card.Link
              href={"/articlelist/" + props.article.directory}
              className="ArticleItem-directory"
            >
              {props.article.directory}/ <br />
            </Card.Link>
            <Card.Link href={"/article/" + props.article._id} className="ArticleItem-title">
              {props.article.title}
            </Card.Link>
          </div>
          {props.manage ? (
            <Button style={{ height: "40px" }} variant="outline-danger" onClick={handleShow}>
              Remove
            </Button>
          ) : null}
        </div>
      </Card.Header>
      <Card.Body>{tagList}</Card.Body>
      <Card.Footer className="ArticleItem-date">{date.toDateString()}</Card.Footer>
    </Card>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to remove this article?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={removeArticle}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ArticleItem;
