// src/components/SignupForm.jsx
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Correct path
import "./SignupForm.css";

const SignupForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    gender: "",
    age: "",
    grade: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please input Your Name here";
    if (!formData.nickname) newErrors.nickname = "Please input Your Nickname here";
    if (!formData.gender) newErrors.gender = "Please input Your Gender here";
    if (!formData.age) newErrors.age = "Please input Your Age here";
    if (!formData.grade) newErrors.grade = "Please input Your Grade here";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        await addDoc(collection(db, "users"), {
          name: formData.name,
          nickname: formData.nickname,
          gender: formData.gender,
          age: formData.age,
          grade: formData.grade,
        });
        console.log("Profile data saved successfully!");
        props.onNext(); // Navigate to Signup Step 2
      } catch (error) {
        console.error("Error saving profile data:", error);
        alert("Failed to save data. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="form-wrapper">
        <h1>Let's get started</h1>
        <p className="subtitle">
          This game enhances your intelligence, swift adjustment, teamwork, quick thinking, and decision making.
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
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="nickname">Your Nickname</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
            />
            {errors.nickname && <p className="error">{errors.nickname}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="gender">Your Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
            {errors.gender && <p className="error">{errors.gender}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="age">Your Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="1"
              max="120"
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="grade">Your Grade/Section</label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
            />
            {errors.grade && <p className="error">{errors.grade}</p>}
          </div>

          <button type="submit" className="next-btn">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;