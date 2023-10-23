import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <button>Logout</button>
      SocialStar{" "}
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
          alt="profile pic"
        />
      </div>
    </div>
  );
}

export default Header;
