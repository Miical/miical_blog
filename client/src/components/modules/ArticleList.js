import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { get } from "../../utilities";
import { Card, ListGroup, Badge, Spinner } from "react-bootstrap";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    get("/api/articlelist", { directory: "all" }).then((articlesObj) => {
      setArticles(articlesObj);
    });
  }, []);

  let dirList = [];
  for (let article of articles) {
    let dir = dirList.find((dir) => dir.directory === article.directory);
    if (!dir) dirList.push({ directory: article.directory, number: 1 });
    else dir.number++;
  }

  let dirItemList = null;
  if (dirList.length !== 0) {
    dirList.sort((x, y) => (x.directory > y.directory ? 1 : -1));
    dirItemList = dirList.map((dirItem) => (
      <ListGroup.Item
        as="a"
        className="d-flex justify-content-between align-items-start"
        action
        href={"/articlelist/" + dirItem.directory}
      >
        <div className="ms-2 me-auto">{dirItem.directory}</div>
        <Badge bg="primary" pill>
          {dirItem.number}
        </Badge>
      </ListGroup.Item>
    ));
  } else {
    dirItemList = null;
  }

  return (
    <Card style={{ width: "17rem", top: "1rem" }}>
      <Card.Header className="fw-bold">Article List</Card.Header>
      <ListGroup variant="flush">
        {dirItemList ? (
          <>
            <ListGroup.Item
              as="a"
              className="d-flex justify-content-between align-items-start"
              action
              href="/articlelist/all"
            >
              <div className="ms-2 me-auto">All</div>
              <Badge bg="primary" pill>
                {articles.length}
              </Badge>
            </ListGroup.Item>
            {dirItemList}
          </>
        ) : (
          <div style={{margin: "20px auto 20px auto"}}>
          <Spinner animation="grow" />
          </div>
        )}
      </ListGroup>
    </Card>
  );
};

export default ArticleList;
