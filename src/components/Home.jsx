import React from "react";
import Logo from "../assets/Logo.png";
import Posts from "./Posts";

const Home = (props) => {
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
      <Posts baseUrl={props.baseUrl} search={props.search} />
    </div>
  );
};

export default Home;
