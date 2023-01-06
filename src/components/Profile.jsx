import React, { useState, useEffect } from "react";
import axios from "axios";
import EachPost from "./EachPost";
import Logo from "../assets/Logo.png";

const Profile = (props) => {
  const [userPosts, setUserPosts] = useState([]);

  const getUserPosts = () => {
    axios
      .get(
        `${props.baseUrl}api/posts/profile?userid=${
          JSON.parse(localStorage.getItem("currentUser")).id
        }`
      )
      .then((response) => {
        setUserPosts(response.data);
      });
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-title-div">
        <p className="profile-title">Account Info</p>
        <hr className="post-hr" />
      </div>
      <div className="profile-info">
        <div className="profile-info-div">
          <p className="profile-info-p">First Name:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).firstname}
          </p>
        </div>
        <div className="profile-info-div">
          <p className="profile-info-p">Last Name:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).lastname}
          </p>
        </div>
        <div className="profile-info-div">
          <p className="profile-info-p">Username:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).username}
          </p>
        </div>
        <div className="profile-info-div">
          <p className="profile-info-p">Email:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).email}
          </p>
        </div>
      </div>
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

      {userPosts.map((post, index) => {
        return (
          <EachPost
            key={index}
            post={post}
            setPosts={setUserPosts}
            index={index}
            baseUrl={props.baseUrl}
            getPosts={getUserPosts}
            currentUser={props.currentUser}
          />
        );
      })}
    </div>
  );
};

export default Profile;
