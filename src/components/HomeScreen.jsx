import React from "react";
import "./HomeScreen.css";
import ProfileImg from "../assets/Profile.png";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleSoloClick = () => {
    navigate("/solo"); // Navigate to Solo mode
  };

  const handleGroupClick = () => {
    navigate("/group"); // Navigate to Group mode
  };

  return (
    <div className="home-screen">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="user-profile">
          <img src={ProfileImg} alt="User" className="avatar" />
          <div className="user-info">
            <span className="username">Dominic</span>
            <span className="grade">11th grade</span>
          </div>
        </div>
        <button className="settings-btn">⚙️</button>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="mode-section solo-mode" onClick={handleSoloClick}>
          <h2>Solo</h2>
        </div>
        <div className="mode-section group-mode" onClick={handleGroupClick}>
          <h2>Group</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;