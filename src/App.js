// src/App.js
import React, { useState } from 'react';
import SignupForm from './components/SignupForm.js';
import SignupFormStep2 from './components/SignupFormStep2.js';

function App() {
  const [step, setStep] = useState(1);

  const goToNextStep = () => setStep(2);

  return (
    <div className="App">
      {step === 1 && <SignupForm onNext={goToNextStep} />}
      {step === 2 && <SignupFormStep2 />}
    </div>
  );
}

export default App;