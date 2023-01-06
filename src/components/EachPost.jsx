import React, { useState, useEffect } from "react";
import ReactTimeAgo from "react-time-ago";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlineEllipsis, AiOutlineClose } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";
import EditPost from "./EditPost";

const EachPost = (props) => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [likes, setLikes] = useState(props.post.likes);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleUpvote = async (e) => {
    if (upvote === true || downvote === true) {
      return;
    }
    if (!JSON.parse(localStorage.getItem("currentUser"))) {
      window.location.pathname = "/login";
      return;
    }
    await axios
      .get(`${props.baseUrl}api/posts/${props.post.id}`)
      .then((response) => {
        let newData = response.data;
        newData.likes++;
        newData.upvoted.push(
          JSON.parse(localStorage.getItem("currentUser")).id
        );
        axios
          .put(`${props.baseUrl}api/posts/${props.post.id}`, newData)
          .then((response) => {
            setUpvote(true);
            setLikes(response.data.likes);
          });
      });
  };

  const handleDownvote = async (e) => {
    if (downvote === true || upvote === true) {
      return;
    }
    if (!JSON.parse(localStorage.getItem("currentUser"))) {
      window.location.pathname = "/login";
      return;
    }
    await axios
      .get(`${props.baseUrl}api/posts/${props.post.id}`)
      .then((response) => {
        let newData = response.data;
        newData.likes--;
        newData.downvoted.push(
          JSON.parse(localStorage.getItem("currentUser")).id
        );
        axios
          .put(`${props.baseUrl}api/posts/${props.post.id}`, newData)
          .then((response) => {
            setDownvote(true);
            setLikes(response.data.likes);
          });
      });
  };

  const handleDelete = (e) => {
    axios
      .delete(`${props.baseUrl}api/posts/${props.post.id}`)
      .then((response) => {
        setShowDelete(false);
        if (window.location.pathname === "/profile") {
          props.getPosts();
        }
        if (window.location.pathname === "/") {
          console.log("hello");
          axios.get(`${props.baseUrl}api/posts`).then((response) => {
            props.setPosts(response.data);
          });
        }
      });
  };

  const checkIfUpvoted = () => {
    props.post.upvoted.map((id, index) => {
      if (JSON.parse(localStorage.getItem("currentUser"))) {
        if (id === JSON.parse(localStorage.getItem("currentUser")).id) {
          setUpvote(true);
        }
      }
    });
  };

  const checkIfDownvoted = () => {
    props.post.downvoted.map((id, index) => {
      if (JSON.parse(localStorage.getItem("currentUser"))) {
        if (id === JSON.parse(localStorage.getItem("currentUser")).id) {
          setDownvote(true);
        }
      }
    });
  };

  useEffect(() => {
    checkIfUpvoted();
    checkIfDownvoted();
  }, []);

  return (
    <div key={props.index} className="each-post">
      <div className="upvote">
        <BiUpvote
          color={upvote ? "#3e8de3" : undefined}
          onClick={handleUpvote}
          className="arrow-vote"
        />
        <p className="num-votes">{likes}</p>
        <BiDownvote
          color={downvote ? "#3e8de3" : undefined}
          onClick={handleDownvote}
          className="arrow-vote"
        />
      </div>
      <div className="post-info-container">
        <p className="posted-by">
          Posted by {props.post.username}{" "}
          <ReactTimeAgo date={Date.parse(props.post.created)} locale="en-US" />
        </p>
        <p className="each-post-title">{props.post.title}</p>
        <p className="post-body">{props.post.formBody}</p>
        {props.post.imageURL && (
          <img className="post-img" src={props.post.imageURL} alt="img" />
        )}
        <div className="more-actions-div">
          <p onClick={() => setShowComments(true)} className="more-actions-p">
            <FaRegCommentAlt size="1.3em" className="more-actions-icon" /> 0
            Comments
          </p>
          {JSON.parse(localStorage.getItem("currentUser")) &&
            props.post.user_id ===
              JSON.parse(localStorage.getItem("currentUser")).id && (
              <AiOutlineEllipsis
                size="2em"
                onClick={() => setShowDelete(!showDelete)}
                className="more-actions-p"
              />
            )}
          {showDelete && (
            <>
              <p
                onClick={() => {
                  setShowEdit(!showEdit);
                  setShowDelete(false);
                }}
                className="edit"
              >
                <BiEditAlt
                  color="#a1a1a1"
                  size="1.3em"
                  className="more-actions-icon"
                />
                Edit
              </p>
              <p onClick={handleDelete} className="delete">
                <RiDeleteBin7Line
                  color="#a1a1a1"
                  size="1.3em"
                  className="more-actions-icon"
                />
                Delete
              </p>
            </>
          )}
        </div>
      </div>
      {showEdit && (
        <EditPost
          post={props.post}
          index={props.index}
          handleUpvote={handleUpvote}
          handleDelete={handleDelete}
          handleDownvote={handleDownvote}
          upvote={upvote}
          setUpvote={setUpvote}
          downvote={downvote}
          setDownvote={setDownvote}
          showDelete={showDelete}
          setShowDelete={showDelete}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          likes={props.likes}
          baseUrl={props.baseUrl}
          getPosts={props.getPosts}
        />
      )}
      {showComments ? (
        <div className="edit-modal">
          <div className="coming-soon">
            <p
              onClick={() => {
                setShowComments(false);
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
    </div>
  );
};

export default EachPost;
