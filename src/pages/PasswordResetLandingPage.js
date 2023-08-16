import React,{ useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { PasswordResetSuccess } from "./PasswordResetSuccess";
import { PasswordResetFailure } from "./PasswordResetFailure";

export function PasswordResetLandingPage() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const { passwordResetCode } = useParams();
  
    const onResetClicked = async () => {
      try {
        await axios.put(`https://reactfstackblog.herokuapp.com/api/users/${passwordResetCode}/reset-password`, {
          newPassword: passwordValue,
        });
        setIsSuccess(true);
      } catch (e) {
        setIsFailure(true);    
      }
    };
  
    if (isFailure) return <PasswordResetFailure/>;
    if (isSuccess) return <PasswordResetSuccess />;
  
    return (
      <div id="page-body" className="main">
        <h1 align="center">Reset Password</h1>
        <p style={{marginLeft:'22%'}}>Please enter a new password</p>
        <input className="password" type="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} placeholder="Password"/>
        <input className="password" type="password" value={confirmPasswordValue} onChange={(e) => setConfirmPasswordValue(e.target.value)} placeholder="Confirm Password"/>
        <button 
          className="submit"
          disabled={!passwordValue || !confirmPasswordValue || passwordValue !== confirmPasswordValue} onClick={onResetClicked}>
          Reset Password
        </button>
      </div>
    );
  };
  