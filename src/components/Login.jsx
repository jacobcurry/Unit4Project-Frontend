import React from "react";

const Login = () => {
  return (
    <div className="form-login">
      <div className="form-title">Log in</div>
      <div className="input-container ic2">
        <input id="email" className="input" type="email" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">
          Email
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="password"
          className="input"
          type="password"
          placeholder=" "
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
        New to Forgeddit?{" "}
        <a className="form-switch-link" href="/signup">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
