import React from "react";
import "./ChatSettings.css";

const ChatSettings = () => {
  return (
    <div className="chat-settings">
      <h3>Chat Settings</h3>
      <ul>
        <li>Mute Notifications</li>
        <li>Clear Chat</li>
        <li>Delete Chat</li>
      </ul>
    </div>
  );
};

export default ChatSettings;
