import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Search from "../assets/Search.png";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-container">
      <Link to="/">
        <div className="title-img-container">
          <img className="logo" src={Logo} alt="logo" />
          <h2 className="title">forgeddit</h2>
        </div>
      </Link>
      <div className="search-container search-701px">
        <form className="search-form">
          <img className="mag-glass" src={Search} alt="search" />
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Search Forgeddit"
          />
        </form>
      </div>
      <div className="nav-profile-container">
        <div className="caret-container" onClick={() => setOpen(!open)}>
          <p className="username-p">Username</p>
          <i className="bx bx-chevron-down" id="arrow"></i>
        </div>
        {open && <DropdownMenu />}
      </div>
    </div>
  );
};

export default Navbar;
