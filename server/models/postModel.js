const mongoose = require("mongoose");

const postModel = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true, require: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postModel);
module.exports = Post;
