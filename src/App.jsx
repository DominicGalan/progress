import React, { useState } from "react";
import SignupForm from "./components/SignupForm.jsx";
import SignupFormStep2 from "./components/SignupFormStep2.jsx";
import LoginForm from "./components/LoginForm.jsx";
import HomeScreen from "./components/HomeScreen.jsx";

function App() {
  const [currentStep, setCurrentStep] = useState("login"); // Tracks the current step: "login", "signup1", "signup2", "home"

  const handleLoginSuccess = (userData) => {
    if (userData) {
      console.log("User logged in:", userData);
      setCurrentStep("home"); // Navigate to HomeScreen after successful login
    } else {
      setCurrentStep("signup1"); // Switch to Signup Step 1
    }
  };

  const handleSignupNext = () => {
    setCurrentStep("signup2"); // Switch to Signup Step 2
  };

  const handleSignupBack = () => {
    setCurrentStep("signup1"); // Go back to Signup Step 1
  };

  const handleSignupComplete = () => {
    setCurrentStep("login"); // Navigate to Login page after signup
  };

  return (
    <div className="App">
      {currentStep === "login" && <LoginForm onLoginSuccess={handleLoginSuccess} />}
      {currentStep === "signup1" && <SignupForm onNext={handleSignupNext} />}
      {currentStep === "signup2" && <SignupFormStep2 onBack={handleSignupBack} onNext={handleSignupComplete} />}
      {currentStep === "home" && <HomeScreen />}
    </div>
  );
}

export default App;
