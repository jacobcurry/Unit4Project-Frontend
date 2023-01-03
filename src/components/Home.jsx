import React from "react";
import Logo from "../assets/Logo.png";
import { Navigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-post-container">
        <img className="post-logo" src={Logo} alt="Logo" />
        <div
          onClick={() => (window.location.pathname = "/post")}
          className="fake-input"
        >
          Create Post
        </div>
      </div>
    </div>
  );
};

export default Home;
