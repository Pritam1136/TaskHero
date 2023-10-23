import React from "react";
import "../styles/SideBar.css";
import People from "./People";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-body">Recommendations</div>
      <People
        name="Pritam"
        src="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
      />
      <People
        name="Dhananjay"
        src="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
      />
      <People
        name="Rahul"
        src="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
      />
      <People
        name="Sounak"
        src="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
      />
      <People
        name="Bikas"
        src="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
      />
      <People
        name="Ayush"
        src="https://pbs.twimg.com/profile_images/1708516856481423360/Aa3XXYMo.jpg"
      />
    </div>
  );
}

export default SideBar;
