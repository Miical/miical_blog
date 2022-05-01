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
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

let ArticleList = [
{
    directory: "study_notes",
    title: "article title1",
    description:
      " allow miles wound place the leave had. to sitting subject no improve studied limited. ye indulgence unreserved connection alteration appearance my an astonished. up as seen sent make he they of. her raising and himself pasture believe females. fancy she stuff after aware merit small his. charmed esteems luckily age out.",
    tag: ["王宁", "是", "憨批", "哈哈"],
    date: 324523434,
    content: "$ \sum_{i=1}^{n}a_{i} $  $$\sum_{i=1}^{n}a_{i}$$ \(\sum_{i=1}^{n}a_{i}\) \[\sum_{i=1}^{n}a_{i}\]"
  }, {
    directory: "study_notes",
    title: "article title2",
    description:
      " allow miles wound place the leave had. to sitting subject no improve studied limited. ye indulgence unreserved connection alteration appearance my an astonished. up as seen sent make he they of. her raising and himself pasture believe females. fancy she stuff after aware merit small his. charmed esteems luckily age out.",
    tag: ["dp", "note", "hanpi"],
    date: 324523434,
    content: "dhdsihfiusdhfiuhi"
  }
];
router.get("/articles", (req, res) => {
  res.send(ArticleList);
});
router.get("/singlearticle", (req, res) => {
  res.send(ArticleList.find((story) => {
    return story.title === req.query.articleId;
  }));
});
router.post("/article", (req, res) => {
  ArticleList.push(req.body);
  res.send(req.body);
});



// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
