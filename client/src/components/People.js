import "../styles/People.css";
import React from "react";

function People({ src, name }) {
  return (
    <div className="people">
      <div className="indiPeople">
        <img className="image" src={src} alt="profile pic" />{" "}
        <p className="personName">{name}</p>
      </div>
    </div>
  );
}

export default People;
