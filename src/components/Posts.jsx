import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import { BiUpvote, BiDownvote } from "react-icons/bi";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get(`${props.baseUrl}api/posts`).then((response) => {
      setPosts(response.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post, index) => {
        return (
          <div key={index} className="each-post">
            <div className="upvote">
              <BiUpvote className="arrow-vote" />
              <p className="num-votes">0</p>
              <BiDownvote className="arrow-vote" />
            </div>
            <div className="post-info-container">
              <p className="posted-by">
                Posted by {post.user}{" "}
                <ReactTimeAgo date={Date.parse(post.created)} locale="en-US" />
              </p>
              <p className="each-post-title">{post.title}</p>
              <p className="post-body">{post.formBody}</p>
              {post.imageURL && (
                <img className="post-img" src={post.imageURL} alt="img" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
