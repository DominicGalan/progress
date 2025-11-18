// src/components/HomeScreen.jsx
import React from 'react';
import './HomeScreen.css';

const HomeScreen = () => {
  const handleSoloClick = () => {
    alert('Solo mode selected!');
  };

  const handleGroupClick = () => {
    alert('Group mode selected!');
  };

  return (
    <div className="home-screen">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="user-profile">
          <img url="D:\VS code\Project Finals\sdev_finals\src\assets\Profile.png" alt="User" className="avatar" />
          <div className="user-info">
            <span className="username">Dominic</span>
            <span className="grade">11th grade</span>
          </div>
        </div>
        <button className="settings-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" />
            <path d="M12 15V19" />
            <path d="M12 15H16" />
            <path d="M12 15H8" />
            <path d="M12 15V11" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="mode-section solo-mode" onClick={handleSoloClick}>
          <h2>Solo</h2>
          <div className="icon-placeholder">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <rect x="10" y="10" width="100" height="100" rx="10" fill="#FF6B6B" opacity="0.3"/>
              <text x="60" y="70" textAnchor="middle" fontSize="24" fill="#FF6B6B">S</text>
            </svg>
          </div>
        </div>

        <div className="mode-section group-mode" onClick={handleGroupClick}>
          <h2>Group</h2>
          <div className="icon-placeholder">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <rect x="10" y="10" width="100" height="100" rx="10" fill="#4ECDC4" opacity="0.3"/>
              <text x="60" y="70" textAnchor="middle" fontSize="24" fill="#4ECDC4">G</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;