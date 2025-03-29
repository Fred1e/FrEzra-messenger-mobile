import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <img src="/app-icon.png" alt="Profile" className="profile-pic" />
      <p>Name: John Doe</p>
      <p>Phone: +1234567890</p>
    </div>
  );
};

export default Profile;
