import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Correct path
import "./LoginForm.css";

const LoginForm = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", formData.email), where("password", "==", formData.password));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Login successful
        const userData = querySnapshot.docs[0].data();
        console.log("Login successful:", userData);
        onLoginSuccess(userData); // Pass user data to parent component
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <h1>Log In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <p className="switch-link">
          Don't have an account? <button onClick={() => onLoginSuccess(null)}>Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;