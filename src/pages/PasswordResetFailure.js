import React from "react";
import { useNavigate } from "react-router-dom";


export const PasswordResetFailure = () => {
    const navigate = useNavigate();

    return (
        <div id="page-body">
            <h1>Uh oh...</h1>
            <p>
                Something went wrong while trying to reset your password.
            </p>
            <button onClick={() => navigate("/signin")} className="password-success-btn">Back to Sign In</button> 
        </div>
    );
};