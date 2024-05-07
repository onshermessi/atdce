import React from "react";
import RegistrationForm from "./pages/Registration";
import "./App.css";
import axios from "axios";

function App() {
  // Define a function to handle registration
  const handleRegistration = async (email) => {
    try {
      await axios.post("/register", { email });
      alert("Verification email sent!");
    } catch (error) {
      console.error("Registration error:", error.response.data.error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div className="App">
      <h1>marhbeeeeeeeeeeeeee</h1>
      <RegistrationForm handleRegistration={handleRegistration} />
    </div>
  );
}

export default App;
