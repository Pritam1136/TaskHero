import React, { useRef } from "react";
import "./login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };
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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              required
              type="email"
              placeholder="email"
              className="loginInput"
              ref={email}
            />
            <input
              required
              type="password"
              minLength="6"
              placeholder="password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">LOGIN</button>
            <span className="loginForgot">Forgot password?</span>
            <button type="submit" className="loginRegisterButton">
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
