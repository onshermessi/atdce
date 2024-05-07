import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/SignUp";

const SignUpPage = () => {
  return (
    <div>
      <h1> Sign Up </h1>
      <RegistrationForm />
      <p>
        Already have an account?<Link to="/login">Log In</Link>{" "}
      </p>
    </div>
  );
};

export default SignUpPage;
