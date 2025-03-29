import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css"; // Styles for splash screen

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000); // Show splash for 3 seconds
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src="/splash.png" alt="FrEzra Messenger" />
      <h2>FrEzra Messenger</h2>
      <p>Loading...</p>
    </div>
  );
};

export default Splash;
