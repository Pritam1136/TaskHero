const Post = require("../modals/Post");

const fetchPosts = async (req, res) => {
  //   find the notes
  const post = await Post.find();

  // respond with it
  res.json({ post });
};

const fetchPost = async (req, res) => {
  // get id of the url
  const postId = req.params.id;

  // find the note using the id
  const post = await Post.findById(postId);

  // respond with the note
  res.json({ post });
};

const createPost = async (req, res) => {
  // Get the sent in data off request body

  const { content, like, dislike } = req.body;

  //  create a note with it
  const post = await Post.create({
    content,
    like,
    dislike,
  });

  //   respond with the new note
  res.json({ post });
};

const updatePost = async (req, res) => {
  // get the id off the url
  const postId = req.params.id;

  //    get the data off the req body

  const { content, like, dislike } = req.body;

  // find and update the record
  await Post.findByIdAndUpdate(postId, {
    content,
    like,
    dislike,
  });

  //   find updated note
  const post = await Post.findById(postId);

  // respond
  res.json({ post });
};

const deletePost = async (req, res) => {
  // get id off the url
  const postId = req.params.id;

  // Delete the record
  await Post.deleteOne({ _id: postId });

  // respond
  res.json({ success: "post deleted successfully" });
};

module.exports = {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
};
