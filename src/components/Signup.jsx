import React from "react";

const Signup = () => {
  return (
    <div className="form-signup">
      <div className="form-title">Signup</div>
      <div className="name-container">
        <div className="input-container ic2 first-name-container">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            First Name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="lastname" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="lastname" className="placeholder">
            Last Name
          </label>
        </div>
      </div>
      <div className="input-container ic2">
        <input
          id="username"
          className="input"
          type="username"
          placeholder=" "
        />
        <div className="cut cut-short"></div>
        <label htmlFor="username" className="placeholder">
          Username
        </label>
      </div>
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
        Have an Account?{" "}
        <a className="form-switch-link" href="/login">
          Log In
        </a>
      </p>
    </div>
  );
};

export default Signup;
