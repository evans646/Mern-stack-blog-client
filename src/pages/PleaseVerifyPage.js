import React,{ useEffect } from "react";
import { useNavigate } from 'react-router';



export function PleaseVerifyEmailPage() {
    const navigate = useNavigate();
  
    useEffect(() => {
        setTimeout(() => {
            navigate('/signin')
            window.location.reload();
        },3000)
    },[navigate])
 
    return (
        <div className='pleaseVerifyPage' id="page-body">
            <h1>Thanks for signing up!</h1>
            <p>
                A verification link has been sent to your email
                please click on the link to verify and continue
            </p>
        </div>
    );
};
