import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import { useToken } from "../authentication/useToken";
import { EmailVerificationSuccess } from "./EmailVerificationSuccess";
import { EmailVerificationFailure } from "./EmailVerificationFailure";

export const EmailVerificationLandingPage = () => {
    const [loading, setLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const { verificationString } = useParams();
    const [,setToken] = useToken();
          //for ring-loader 
    let   [color, setColor] = useState("#ffffff");

    useEffect(() => {
        const loadVerification = async () => {
            try {
                const response = await axios.put('reactfstackblog.herokuapp.com/api/verify-email', { verificationString });
                const { token } = response.data;
                setToken(token);
                setIsSuccess(true);
                setLoading(false);
            } catch (e) { 
                setIsSuccess(false);
                setLoading(false);
                setColor("#207d9c");
            }
        }
        loadVerification();
    }, [setToken, verificationString]);

    const loadingMessage = (
        <div style={{justifyContent:'center',marginLeft:'32%',padding:'14%'}}>
          <ClimbingBoxLoader color={color} loading={loading} size={10} />
          <h2>Loading...</h2>
        </div>
   );
  
    if (loading) return loadingMessage;

    if (!isSuccess) return <EmailVerificationFailure/>
    return <EmailVerificationSuccess />
}