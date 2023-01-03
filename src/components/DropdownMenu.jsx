import React from "react";
import Search from "../assets/Search.png";

const DropdownMenu = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="dropdown">
      <div className="search-container search-700px">
        <form className="search-form" onClick={handleSubmit}>
          <img className="mag-glass" src={Search} alt="search" />
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Search Forgeddit"
          />
        </form>
      </div>
      <a href="/" className="menu-item">
        Home
      </a>
      <a href="/post" className="menu-item">
        Create Post
      </a>
      <a href="/profile" className="menu-item">
        My Profile
      </a>
      <a href="/" className="menu-item">
        Log Out
      </a>
    </div>
  );
};

export default DropdownMenu;
