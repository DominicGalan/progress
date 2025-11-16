// src/components/SignupFormStep2.jsx
import React, { useState } from 'react';
import './SignupFormStep2.css';

const SignupFormStep2 = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Account Created:', formData);
    // Add your API call or navigation logic here
    alert('Welcome! Account created successfully.');
  };

  const handleSocialLogin = (platform) => {
    alert(`Logging in with ${platform}...`);
    // Add actual OAuth logic later
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
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Repeat Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="sign-in-btn">
            Sign in
          </button>

          <div className="social-login">
            <span className="or-divider">OR</span>
            <div className="social-buttons">
              <button
                type="button"
                className="social-btn facebook"
                onClick={() => handleSocialLogin('Facebook')}
              >
                f
              </button>
              <button
                type="button"
                className="social-btn google"
                onClick={() => handleSocialLogin('Google')}
              >
                G
              </button>
              <button
                type="button"
                className="social-btn instagram"
                onClick={() => handleSocialLogin('Instagram')}
              >
                📸
              </button>
            </div>
          </div>

          <div className="login-link">
            Already have an Account? <a href="/login">Log in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupFormStep2;