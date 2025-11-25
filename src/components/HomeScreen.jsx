import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileImg from "../assets/Profile.png";
import "./HomeScreen.css";

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
      <div className="top-bar">
        <div className="user-profile">
          <img src={ProfileImg} alt="User" className="avatar" />
        </div>
        <button className="settings-btn">⚙️</button>
      </div>
      <div className="content">
        <div className="mode-section solo-mode" onClick={() => navigate("/solo")}>
          <h2>Solo</h2>
        </div>
        <div className="mode-section group-mode" onClick={() => navigate("/group")}>
          <h2>Group</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
