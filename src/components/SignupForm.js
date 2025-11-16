// src/components/SignupForm.jsx
import React, { useState } from 'react';
import './SignupForm.css';

// ✅ CORRECT: Added 'props' as parameter
const SignupForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    gender: '',
    age: '',
    grade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your API call or navigation logic here
    alert('Welcome aboard!');
  };

  return (
    <div className="signup-container">
      <div className="form-wrapper">
        <h1>Let's get started</h1>
        <p className="subtitle">
          This game enhances your intelligence, swift adjustment, teamwork, quick thinking, and decision making
        </p>
        <h2>Hello, Newcomer</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="nickname">Your Nickname</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="gender">Your Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="age">Your Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="1"
              max="120"
            />
          </div>

          <div className="input-group">
            <label htmlFor="grade">Your Grade/Section</label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
            />
          </div>

          <button 
            type="submit" 
            className="next-btn"
            onClick={(e) => { 
              e.preventDefault(); 
              props.onNext(); 
            }}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;