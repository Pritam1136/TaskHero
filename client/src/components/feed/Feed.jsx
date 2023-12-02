import React, { useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchpost = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/6566367f4e298da8e1acd154");
      setPosts(res.data);
    };
    fetchpost();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
