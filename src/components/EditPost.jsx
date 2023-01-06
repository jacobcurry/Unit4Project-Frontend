import React, { useState, useEffect } from "react";
import ReactTimeAgo from "react-time-ago";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";

const EditPost = (props) => {
  let emptyPost = {
    user_id: JSON.parse(localStorage.getItem("currentUser")).id,
    username: JSON.parse(localStorage.getItem("currentUser")).username,
    title: props.post.title,
    formBody: "",
    imageURL: "",
    likes: props.post.likes,
    upvoted: props.post.upvoted,
    downvoted: props.post.downvoted,
  };

  const [post, setPost] = useState(emptyPost);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${props.baseUrl}api/posts/${props.post.id}`, post)
      .then((response) => {
        props.getPosts();
        props.setShowEdit(false);
      });
  };

  return (
    <div className="edit-modal">
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="close-div">
          <p className="edit-form-title">Edit post</p>
          <p onClick={() => props.setShowEdit(false)} className="close-p">
            <AiOutlineClose size="1.5em" />
            Close
          </p>
        </div>
        <p className="posted-by">
          Posted by {props.post.username}{" "}
          <ReactTimeAgo date={Date.parse(props.post.created)} locale="en-US" />
        </p>
        <p className="edit-post-title">{props.post.title}</p>
        <textarea
          name="formBody"
          onChange={handleChange}
          defaultValue={props.post.formBody}
          placeholder="Text(optional)"
          className="post-textarea"
          cols="30"
          rows="10"
        ></textarea>
        <button className="post-button-form">Save</button>
      </form>
    </div>
  );
};

export default EditPost;
