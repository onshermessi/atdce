import React, { useState } from "react";
import axios from "axios";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleVerifyClick = async () => {
    // to do: implement email verification logic
    try {
      const response = await axios.post("http://localhost:3500/verify", {
        email,
      });
      setVerificationStatus("success");
      console.log("Email sent successfully!", response.data);
    } catch (error) {
      setVerificationStatus("error");
      console.log("Failed to send email:", error);
    }
  };

  let statusMessage = null;
  if (verificationStatus === "success") {
    statusMessage = <div>Email sent successfully!</div>;
  } else if (verificationStatus === "error") {
    statusMessage = <div>Failed to send email. Please try again.</div>;
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <button onClick={handleVerifyClick}>Verify</button>
    </div>
  );
};

export default EmailVerification;
