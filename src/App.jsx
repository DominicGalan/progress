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
  const [signupData, setSignupData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <LoginForm />}
        />
        <Route
          path="/signup1"
          element={<SignupForm onNext={(data) => setSignupData(data)} />}
        />
        <Route
          path="/signup2"
          element={
            <SignupFormStep2
              initialData={signupData}
              onComplete={() => Navigate("/")}
            />
          }
        />
        <Route
          path="/home"
          element={user ? <HomeScreen /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
