import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>FrEzra Messenger</h2>
      <Link to="/chats">Chats</Link>
      <Link to="/groups">Groups</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default Sidebar;
