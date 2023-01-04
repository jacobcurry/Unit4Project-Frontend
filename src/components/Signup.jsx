import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Signup = (props) => {
  let emptyUser = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  };

  const [user, setUser] = useState(emptyUser);
  const [err, setErr] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${props.baseUrl}api/users`, user)
      .then((response) => {
        setErr({});
        props.setCurrentUser(response.data);
        localStorage.setItem("currentUser", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        setErr(error.response.data);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-signup">
      {localStorage.getItem("currentUser") && (window.location.pathname = "/")}
      <div className="form-title">Signup</div>
      <div className="name-container">
        <div className="input-container ic2 first-name-container">
          <input
            onChange={handleChange}
            name="firstname"
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            First Name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={handleChange}
            name="lastname"
            id="lastname"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut"></div>
          <label htmlFor="lastname" className="placeholder">
            Last Name
          </label>
        </div>
      </div>
      <div className="input-container ic2">
        <input
          onChange={handleChange}
          name="username"
          id="username"
          className="input"
          type="username"
          placeholder=" "
          required
          maxLength={32}
        />
        <div className="cut cut-short"></div>
        <label htmlFor="username" className="placeholder">
          Username
        </label>
      </div>
      {err.username && <p className="err-msg">Username already exists</p>}
      <div className="input-container ic2">
        <input
          onChange={handleChange}
          name="email"
          id="email"
          className="input"
          type="email"
          placeholder=" "
          required
        />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">
          Email
        </label>
      </div>
      {err.email && <p className="err-msg">Email already exists</p>}
      <div className="input-container ic2">
        <input
          onChange={handleChange}
          name="password"
          id="password"
          className="input"
          type="password"
          placeholder=" "
          required
        />
        <div className="cut"></div>
        <label htmlFor="password" className="placeholder">
          Password
        </label>
      </div>
      <button type="text" className="submit">
        Submit
      </button>
      <p className="form-switch-p">
        Have an Account?{" "}
        <a className="form-switch-link" href="/login">
          Log In
        </a>
      </p>
    </form>
  );
};

export default Signup;
