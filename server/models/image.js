const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  name: String,
  article: String,
  data: String
});

// compile model from schema
module.exports = mongoose.model("image", ImageSchema);
