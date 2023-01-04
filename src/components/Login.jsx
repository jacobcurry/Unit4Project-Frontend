import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  let emptyUser = { email: "", password: "" };
  const [user, setUser] = useState(emptyUser);
  const [err, setErr] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${props.baseUrl}api/useraccount/login`, user)
      .then((response) => {
        setErr({});
        localStorage.setItem("currentUser", JSON.stringify(response.data));
      })
      .catch((error) => {
        setErr(error.response.data);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-login">
      {localStorage.getItem("currentUser") && (window.location.pathname = "/")}
      <div className="form-title">Log in</div>
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
      {err.email && <p className="err-msg">{err.email}</p>}
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
      {err.password && <p className="err-msg">{err.password}</p>}
      <button type="text" className="submit">
        Submit
      </button>
      <p className="form-switch-p">
        New to Forgeddit?{" "}
        <a className="form-switch-link" href="/signup">
          Sign Up
        </a>
      </p>
    </form>
  );
};

export default Login;
