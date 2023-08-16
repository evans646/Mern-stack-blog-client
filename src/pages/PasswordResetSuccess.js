import React from "react";
import { useNavigate } from 'react-router-dom';

export const PasswordResetSuccess = () => {
    const navigate = useNavigate();

    return (
        <div id="page-body">
            <div class="successII alert">
               <div class="alert-body">
                  Success !
               </div>
               <p>
                Your password has been reset, now please login with your new password.
            </p>
            <button onClick={() => navigate("/signin")} className="password-success-btn">Sign in page</button>
            </div>
        </div>
    );
};