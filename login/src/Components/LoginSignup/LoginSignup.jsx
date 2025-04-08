import React, { useState } from 'react';
import './LoginSignup.css';
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { TbLockPassword } from "react-icons/tb";

function LoginSignup() {
  const [action, setaction] = useState("Sign up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
      {action === "Log In" ? <div></div> : (
  <div className="input">
    <div className="icons"><CiUser /></div>
    <input type="text" placeholder="Name" />
  </div>
)}
        

        <div className="input">
          <div className="icons"><AiOutlineMail /></div>
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <div className="icons"><TbLockPassword /></div>
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="submit-container">
        <div 
          className={action === "Log In" ? "submit gray" : "submit"} 
          onClick={() => setaction("Sign up")}
        >
          Sign Up
        </div>

        <div 
          className={action === "Sign up" ? "submit gray" : "submit"} 
          onClick={() => setaction("Log In")}
        >
          Log In
        </div>
      </div>
      {action === "Sign up"?<div></div>:<div className="forgot-password">
        Forgot password? <span>Click here</span>
      </div>}

      
    </div>
  );
}

export default LoginSignup;
