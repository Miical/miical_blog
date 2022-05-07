const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  directory: String,
  title: String,
  tag: [String],
  date: Number, 
  content: String
});

// compile model from schema
module.exports = mongoose.model("article", ArticleSchema);
