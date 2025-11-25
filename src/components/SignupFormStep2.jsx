import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./SignupFormStep2.css";

const SignupFormStep2 = ({ initialData }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Save profile data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        ...initialData,
        email: formData.email,
        createdAt: new Date().toISOString()
      });

      navigate("/"); // go to login page
    } catch (err) {
      console.error("Signup error:", err);
      setError("Couldn’t create account. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="form-wrapper">
        <h1>Create Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button className="sign-in-btn" type="submit">Finish</button>
        </form>
      </div>
    </div>
  );
};

export default SignupFormStep2;
