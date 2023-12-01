import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">
            Connect with friend and world around you on social.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <input type="email" placeholder="email" className="loginInput" />
            <input
              type="password"
              placeholder="password again"
              className="loginInput"
            />
            <button className="loginButton">SIGNUP</button>
            <button className="loginRegisterButton">Log in to account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
