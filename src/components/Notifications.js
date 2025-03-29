import React from "react";
import "./Notifications.css";

const Notifications = ({ message }) => {
  return message ? <div className="notification">{message}</div> : null;
};

export default Notifications;
