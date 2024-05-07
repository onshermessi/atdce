import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3500/register",
        formData
      );

      console.log(response.data); // Registration successful

      if (response.status === 201) {
        // if user registering first time => go dashboard
        // window.location.href = "/dashboard";
      }
      setRegistrationStatus("success");
    } catch (err) {
      console.log(err.response.data);
      if (err.response && err.response.status === 409) {
        if (err.response.data.message === "Username already exists") {
          setError("A user with this username has already been registered.");
        } else if (err.response.data.message === "Email already exists") {
          setError("A user with this email already has been registered");
        } else if (
          err.response.data.message === "Username and email already exist"
        ) {
          setError("Username and email have already been taken");
        } else {
          setError("An error has occurred. Please try again later.");
        }
      } else if (
        err.response &&
        err.response.data &&
        err.response.data.message
      ) {
        setError(err.response.data.message);
      } else {
        setError("An error has occurred. Please try again later.");
      }
      setRegistrationStatus("error");
    }
  };
  //jdid
  let statusMessage = null;
  if (registrationStatus === "success") {
    statusMessage = (
      <div>
        Registration successful! Please check your email to verify your account.
      </div>
    );
  } else if (registrationStatus === "error") {
    statusMessage = <div>Failed to register. Please try again.</div>;
  } //nheb nahi hedha lkol o yjini fi page wahadha

  return (
    <div>
      <h2>Registration</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Register</button>
        {statusMessage}
      </form>
    </div>
  );
};

export default RegistrationForm;
