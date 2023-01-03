import React from "react";

const CreatePost = () => {
  return (
    <div className="post-container">
      <p className="create-post-p">Create a post</p>
      <hr className="post-hr" />
      <form className="post-form">
        <input className="post-title" type="text" placeholder="Title" />
        <textarea
          placeholder="Text(optional)"
          className="post-textarea"
          cols="30"
          rows="10"
        ></textarea>

        <button className="post-button-form">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
