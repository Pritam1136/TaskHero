const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
  content: String,
  like: Number,
  dislike: Number,
});

const Post = mongoose.model("Posts", postSchema);

module.exports = Post;
