import React, { useState } from "react";
import "./MessageInput.css";

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSend = () => {
    sendMessage({ text: message, file });
    setMessage("");
    setFile(null);
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
