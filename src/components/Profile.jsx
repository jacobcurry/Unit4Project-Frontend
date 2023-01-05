import React from "react";

const Profile = () => {
  return (
    <div className="profile-container">
      <p className="profile-title">Account Info</p>
      <hr className="post-hr" />
      <div className="profile-info">
        <div className="profile-info-div">
          <p className="profile-info-p">First Name:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).firstname}
          </p>
        </div>
        <div className="profile-info-div">
          <p className="profile-info-p">Last Name:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).lastname}
          </p>
        </div>
        <div className="profile-info-div">
          <p className="profile-info-p">Username:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).username}
          </p>
        </div>
        <div className="profile-info-div">
          <p className="profile-info-p">Email:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
