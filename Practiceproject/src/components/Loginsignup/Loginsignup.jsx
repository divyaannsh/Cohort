import React, { useState } from 'react';
import './Loginsignup.css';

const Loginsignup = () => {
  const [action, setAction] = useState("Signup");

  const handleActionChange = (newAction) => {
    setAction(newAction);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="/path/to/icon.png" alt="username icon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src="/path/to/icon.png" alt="email icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src="/path/to/icon.png" alt="phone icon" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="input">
          <img src="/path/to/icon.png" alt="password icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Lost password? <span className="clickable">Click here</span>
      </div>
      <div className="submit-container">
        <div
          className={`submit ${action === "Signup" ? "" : "gray"}`}
          onClick={() => handleActionChange("Signup")}
        >
          Signup
        </div>
        <div
          className={`submit ${action === "Login" ? "" : "gray"}`}
          onClick={() => handleActionChange("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
