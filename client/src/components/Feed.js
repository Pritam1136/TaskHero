/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/Feed.css";
import Post from "./Post";

function Feed() {
  // states
  const [posts, setPosts] = useState(null);
  const [createPosts, setCreatePosts] = useState({ post: "" });

  // functions
  const createPost = (e) => {
    e.preventDefault();
    setCreatePosts({ post: "" });
  };

  const handleUpdateFormFeild = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    setCreatePosts({ ...createPosts, [name]: value });
  };
  return (
    <div className="feed">
      <div className="input">
        <form className="form" onSubmit={createPost}>
          <input
            name="post"
            onChange={handleUpdateFormFeild}
            value={createPosts.post}
          />
          <button type="submit">Post</button>
        </form>
      </div>
      <Post
        img="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
        name="Profile1"
        body="This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post."
        like={10}
        dislike={3}
      />
      <Post
        img="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
        name="Profile1"
        body="This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post."
        like={10}
        dislike={3}
      />
      <Post
        img="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
        name="Profile1"
        body="This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post."
        like={10}
        dislike={3}
      />
      <Post
        img="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
        name="Profile1"
        body="This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post."
        like={10}
        dislike={3}
      />
      <Post
        img="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
        name="Profile1"
        body="This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post.This is the body of the post."
        like={10}
        dislike={3}
      />
    </div>
  );
}

export default Feed;
