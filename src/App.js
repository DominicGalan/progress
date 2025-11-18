import React, { useState } from "react";
import SignupForm from "./components/SignupForm.js";
import SignupFormStep2 from "./components/SignupFormStep2.js";
import HomeScreen from "./components/HomeScreen.js";

function App() {
  const [step, setStep] = useState(1);

  const goToNextStep = () => setStep(2);
  const goToHome = () => setStep(3);

  return (
    <div className="App">
      {step === 1 && <SignupForm onNext={goToNextStep} />}
      {step === 2 && <SignupFormStep2 onNext={goToHome} />}
      {step === 3 && <HomeScreen />}
    </div>
  );
}

export default App;
