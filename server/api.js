/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Article = require("./models/article");
const Image = require("./models/image");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.get("/article", (req, res) => {
  Article.find({ _id: req.query._id }).then((article) => res.send(article[0]));
});
router.get("/articlelist", (req, res) => {
  if (req.query.directory === "all")
    Article.find({}, { content: false }).then((article) => res.send(article));
  else
    Article.find({ directory: req.query.directory }, { content: false }).then((article) =>
      res.send(article)
    );
});
router.post("/article", (req, res) => {
  const newArticle = new Article({
    directory: req.body.directory,
    title: req.body.title,
    tag: req.body.tag,
    date: req.body.date,
    content: req.body.content,
  });
  newArticle.save().then((article) => res.send(article));
});
router.post("/remove", (req, res) => {
  Article.deleteOne({_id: req.body._id}, (err, obj) => {
    if (err) throw err;
  });
  Image.deleteOne({article: req.body._id}, (err, obj) => {
    if (err) throw err;
    res.send({success: true})
  });
});
router.get("/image", (req, res) => {
  Image.find({ article: req.query.article }).then((imagelist) => res.send(imagelist));
});
router.post("/image", (req, res) => {
  for (let img of req.body) {
    const newImage = new Image({
      article: img.article,
      name: img.name,
      data: img.data,
    });
    newImage.save();
  }
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
