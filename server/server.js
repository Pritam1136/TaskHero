const express = require("express");
const connectToDb = require("./config/connectToDB");
const cors = require("cors");

const postController = require("./controllers/postController");

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const app = express();

app.use(express.json());
app.use(cors());

connectToDb();

app.get("/notes", postController.fetchPosts);

app.get("/notes/:id", postController.fetchPost);

app.post("/notes", postController.createPost);

app.put("/notes/:id", postController.updatePost);

app.delete("/notes/:id", postController.deletePost);

app.listen(process.env.PORT, () => {
  console.log(`Server started in port ${process.env.PORT}`);
});
