import React, { useState, useEffect } from "react";
import { Button, Modal, Card, Form } from "react-bootstrap";
import "./UploadArticle.css";
import { post } from "../../utilities";

const UploadArticle = (props) => {
  let article = {
    title: "no title",
    directory: "no directory",
    tag: [],
    date: 0,
    content: "none",
  };

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [articleId, setArticleId] = React.useState(null);
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
    setModalShow(false);
    post("/api/article", article).then((res) => {
      setArticleId(res._id);
      setModalShow2(true);
    });
  };

  let image = [];
  const showFile2 = (e) => {
    var files = e.target.files;
    var filesArray = [].slice.call(files);
    filesArray.forEach((e) => {
      image.push({ name: e.name, article: "", data: "" });
    });
    e.preventDefault();
    for (let i = 0; i < e.target.files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        image[i].data = text;
      };
      reader.readAsDataURL(e.target.files[i]);
    }
  };
  const Upload2 = () => {
    for (let img of image) img.article = articleId;
    if (image) post("/api/image", image);
    setModalShow2(false);
  };

  function ArticleModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Upload Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter title"
                onChange={(val) => {
                  article.title = val.target.value;
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Directory</Form.Label>
              <Form.Control
                type="Directory"
                placeholder="Enter directory"
                onChange={(val) => {
                  article.directory = val.target.value;
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="Tag"
                placeholder="Enter tag"
                onChange={(val) => {
                  article.tag = val.target.value.split(";").filter((tagVal) => {
                    return tagVal.length !== 0;
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Content</Form.Label>
              <Form.Control as="input" type="file" onChange={showFile} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={Upload}>
            Upload
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function ImageModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Select Image</Form.Label>
              <Form.Control as="input" type="file" multiple="multiple" onChange={showFile2} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={Upload2}>
            Upload
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return props.manage ? (
    <>
      <Card style={{ width: "17rem", marginTop: "2rem" }}>
        <Card.Body>
          <Button
            style={{ marginLeft: "3rem" }}
            variant="success"
            onClick={() => setModalShow(true)}
          >
            Upload Article
          </Button>
        </Card.Body>
      </Card>

      <ArticleModal show={modalShow} onHide={() => setModalShow(false)} />
      <ImageModal show={modalShow2} onHide={() => setModalShow2(false)} />
    </>
  ) : null;
};

export default UploadArticle;
