import React, { useState } from "react";
import axios from "axios";
import Logo from "../assets/Logo.png";
import Search from "../assets/Search.png";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearch(localSearch);
  };

  return (
    <div className="navbar-container">
      <Link to="/">
        <div className="title-img-container">
          <img className="logo" src={Logo} alt="logo" />
          <h2 className="title">forgeddit</h2>
        </div>
      </Link>
      <div className="search-container search-701px">
        <form onSubmit={handleSubmit} className="search-form">
          <img className="mag-glass" src={Search} alt="search" />
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Search Forgeddit"
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="nav-profile-container">
        <div className="caret-container" onClick={() => setOpen(!open)}>
          <p className="username-p">
            {props.currentUser.username
              ? props.currentUser.username
              : "Login/Signup"}
          </p>
          <i className="bx bx-chevron-down" id="arrow"></i>
        </div>
        {open && <DropdownMenu setSearch={props.setSearch} />}
      </div>
    </div>
  );
};

export default Navbar;
