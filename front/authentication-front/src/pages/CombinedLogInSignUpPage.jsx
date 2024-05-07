import React, { useState } from "react";
import LoginForm from "../components/Login";
import RegistrationForm from "../components/SignUp";

const CombinedLoginSignUpPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {isLogin ? <LoginForm /> : <RegistrationForm />}
      <button onClick={toggleForm}>
        {isLogin
          ? "Don't have an account? Sign Up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default CombinedLoginSignUpPage;
