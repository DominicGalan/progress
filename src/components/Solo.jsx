import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupForm from "./components/SignupForm.jsx";
import SignupFormStep2 from "./components/SignupFormStep2.jsx";
import LoginForm from "./components/LoginForm.jsx";
import HomeScreen from "./components/HomeScreen.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup1" element={<SignupForm />} />
        <Route path="/signup2" element={<SignupFormStep2 />} />
        <Route path="/home" element={<HomeScreen />} />
        {/* Redirect any unknown route to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
