import React, { useState } from "react";
import Search from "../assets/Search.png";

const DropdownMenu = (props) => {
  const [localSearch, setLocalSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearch(localSearch);
  };
  return (
    <div className="dropdown">
      <div className="search-container search-700px">
        <form className="search-form" onSubmit={handleSubmit}>
          <img className="mag-glass" src={Search} alt="search" />
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Search Forgeddit"
            onChange={(e) => {
              setLocalSearch(e.target.value);
            }}
          />
        </form>
      </div>
      {localStorage.getItem("currentUser") ? (
        <>
          <a href="/" className="menu-item">
            Home
          </a>
          <a href="/post" className="menu-item">
            Create Post
          </a>
          <a href="/profile" className="menu-item">
            My Profile
          </a>
          <a
            onClick={() => localStorage.removeItem("currentUser")}
            href="/"
            className="menu-item"
          >
            Log Out
          </a>
        </>
      ) : (
        <>
          <a href="/" className="menu-item">
            Home
          </a>
          <a href="/login" className="menu-item">
            Login
          </a>
          <a href="/signup" className="menu-item">
            Signup
          </a>
        </>
      )}
    </div>
  );
};

export default DropdownMenu;
