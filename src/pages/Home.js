import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
