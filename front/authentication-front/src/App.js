import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CombinedLoginSignUpPage from "./pages/CombinedLogInSignUpPage";
import Dashboard from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<SignUpPage />} />
          <Route path="/login-signup" element={<CombinedLoginSignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      ;
    </Router>
  );
}
export default App;
