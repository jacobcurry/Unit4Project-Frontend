import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import EachPost from "./EachPost";
import { get } from "mongoose";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios
      .get(`${props.baseUrl}api/posts?search=${props.search}`)
      .then((response) => {
        setPosts(response.data);
      });
  };

  useEffect(() => {
    getPosts();
  }, [props.search]);

  return (
    <div className="posts-container">
      {posts.length === 0 && (
        <div className="each-post no-results-div">
          <p className="no-results-p">
            Hm... we couldn't find any results for "{props.search}"
          </p>
          <p className="spelling-p">
            Double-check your spelling or try different keywords to adjust your
            search
          </p>
        </div>
      )}
      {posts.map((post, index) => {
        return (
          <EachPost
            key={index}
            post={post}
            setPosts={setPosts}
            index={index}
            baseUrl={props.baseUrl}
            getPosts={getPosts}
          />
        );
      })}
    </div>
  );
};

export default Posts;
