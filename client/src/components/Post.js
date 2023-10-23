import React from "react";
import "../styles/Post.css";

function Post({ img, name, body, like, dislike }) {
  return (
    <div className="post">
      <div className="post-body">
        <div>
          <div className="post-head">
            <img src={img} alt="profile" />
            <p className="profile-name">{name}</p>
          </div>
          <div className="post-content"> {body}</div>
        </div>
        <div className="buttons">
          <div>
            <button>up</button>
            <span style={{ paddingLeft: "10px" }}>{like}</span>
          </div>
          <div>
            <button>doun</button>
            <span style={{ paddingLeft: "10px" }}>{dislike}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
