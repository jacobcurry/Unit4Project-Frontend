import React, { useState, useEffect } from "react";
import {
  AiOutlineFileText,
  AiOutlineFileImage,
  AiOutlineLink,
  AiOutlineClose,
} from "react-icons/ai";
import { IoIosConstruct } from "react-icons/io";
import axios from "axios";

const CreatePost = (props) => {
  const [postType, setPostType] = useState("text");

  let emptyPost = {
    user_id: JSON.parse(localStorage.getItem("currentUser")).id,
    username: JSON.parse(localStorage.getItem("currentUser")).username,
    title: "",
    formBody: "",
    imageURL: "",
    likes: 0,
    upvoted: [0],
    downvoted: [0],
  };

  const [post, setPost] = useState(emptyPost);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    axios
      .post(`${props.baseUrl}api/posts`, post)
      .then((response) => {
        console.log(response);
        window.location.pathname = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="post-container">
      <p className="create-post-p">Create a post</p>
      <hr className="post-hr" />
      <div className="post-type">
        <button
          onClick={() => setPostType("text")}
          className={postType === "text" ? "type-btn selected-btn" : "type-btn"}
        >
          <AiOutlineFileText size={"1.5em"} />
          &nbsp;Text
        </button>
        <button
          onClick={() => setPostType("img")}
          className={postType === "img" ? "type-btn selected-btn" : "type-btn"}
        >
          <AiOutlineFileImage size={"1.5em"} />
          &nbsp;Image
        </button>
        <button
          onClick={() => setPostType("link")}
          className={postType === "link" ? "type-btn selected-btn" : "type-btn"}
        >
          <AiOutlineLink size={"1.5em"} />
          &nbsp;Link
        </button>
      </div>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          name="title"
          onChange={handleChange}
          className="post-title"
          type="text"
          placeholder="Title"
          required
        />
        {postType === "text" && (
          <textarea
            name="formBody"
            onChange={handleChange}
            placeholder="Text(optional)"
            className="post-textarea"
            cols="30"
            rows="10"
          ></textarea>
        )}
        {postType === "img" && (
          <input
            name="image"
            onChange={handleChange}
            className="post-file"
            type="file"
          />
        )}
        {postType === "link" && (
          <input
            name="imageURL"
            onChange={handleChange}
            className="post-link"
            placeholder="Url"
          />
        )}
        {postType === "img" || postType === "link" ? (
          <div className="edit-modal">
            <div className="coming-soon">
              <p
                onClick={() => {
                  setPostType("text");
                }}
                className="create-close-p"
              >
                <AiOutlineClose size="1.5em" />
                Close
              </p>
              <hr />
              <p className="under-dev">
                This feature is currently under development
              </p>
            </div>
          </div>
        ) : null}
        <button className="post-button-form">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
