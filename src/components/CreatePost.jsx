import React, { useState } from "react";
import {
  AiOutlineFileText,
  AiOutlineFileImage,
  AiOutlineLink,
} from "react-icons/ai";

const CreatePost = () => {
  const [postType, setPostType] = useState("text");

  const handleSubmit = () => {};

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
        <input className="post-title" type="text" placeholder="Title" />
        {postType === "text" && (
          <textarea
            placeholder="Text(optional)"
            className="post-textarea"
            cols="30"
            rows="10"
          ></textarea>
        )}
        {postType === "img" && <input className="post-file" type="file" />}
        {postType === "link" && (
          <input className="post-link" placeholder="Url" />
        )}
        <button className="post-button-form">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
