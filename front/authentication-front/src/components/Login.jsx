import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:3500/login",
        formData
      );

      if (response && response.data && response.data.accessToken) {
        //login: success => store acessToken in local storage
        localStorage.setItem("accessToken", response.data.accessToken);
        //hezni f dashboard
        window.location.href = "/dashboard";
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid credentials. Please try again");
      } else if (
        err.response &&
        err.response.data &&
        err.response.data.message
      ) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again later");
      }
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label> Username or Email </label>
          <input
            type="text"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
