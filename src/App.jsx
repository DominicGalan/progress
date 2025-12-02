// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import SignupFormStep2 from "./components/SignupFormStep2";
import HomeScreen from "./components/HomeScreen";

function App() {
  const [user, setUser] = useState(null);
  const [signupProfile, setSignupProfile] = useState(null); // renamed for clarity

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home route: redirect based on auth */}
        <Route
          path="/"
          element={user ? <Navigate to="/home" replace /> : <LoginForm />}
        />

        {/* Step 1: collect profile info */}
        <Route
          path="/signup1"
          element={<SignupForm onNext={setSignupProfile} />}
        />

        {/* Step 2: create account + save data */}
        <Route
          path="/signup2"
          element={
            signupProfile ? (
              <SignupFormStep2 initialData={signupProfile} />
            ) : (
              <Navigate to="/signup1" replace />
            )
          }
        />

        {/* Protected home screen */}
        <Route
          path="/home"
          element={user ? <HomeScreen /> : <Navigate to="/" replace />}
        />

        {/* Optional: catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;