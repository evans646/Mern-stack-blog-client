import React, { useState, useEffect } from "react";
import { FcGoogle } from 'react-icons/fc';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { useToken } from "../authentication/useToken";
import { useQueryParams } from "../utils/useQueryParams";

export function SignInPage() {
  const [,setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");

  const [passwordValue, setPasswordValue] = useState("");
  const [usernameValue, setUsernameValue] = useState(""); 
  const [googleOauthUrl, setGoogleOauthUrl] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { token: oauthToken } = useQueryParams();

  useEffect(() => {
    if (showErrorMessage) {
      setTimeout(() => { 
        setShowErrorMessage(false);
      }, 3000);
    }
  }, [showErrorMessage]);

  useEffect(() => {
    if (oauthToken) {
      setToken(oauthToken);
      navigate("/"); 
      window.location.reload();
    }
  }, [oauthToken, setToken, navigate]);

  useEffect(() => {
    const loadOauthUrl = async () => {
      try {
        const response = await axios.get("auth/google/url");
        const { url } = response.data;
        setGoogleOauthUrl(url);
      } catch (e) {
        console.log(e);
      }
    };
    loadOauthUrl();
  }, []);

 
  const onLogInClicked = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("reactfstackblog.herokuapp.com/api/login", {
        username: usernameValue,
        password: passwordValue,
      });
         const { token } = response.data;
         setTimeout(() => {
         setLoading(true);
      }, 3000);
        setToken(token);
        navigate("/");
        window.location.reload();
    } catch (e) {
      setErrorMessage(e.message);
      console.log(e.status);
      setShowErrorMessage(true);
    }
  };

  const signInMessage = <h1>I am siging in</h1>;
  // So if status code is 500, incorrect username or pass
  // if it is 401 //invalid credentials user does not exist
  return (
    <>
      <div className={errorMessage ? "alert-wrapper":""}>
        {showErrorMessage && <div className="fail">{errorMessage}</div>}
      </div> 
      {loading && <div>{signInMessage}</div>}
      <div className="main">
        <p className="sign"> Sign in </p>
        <form className="form1" />
        <input className="input" type="text" align="center" placeholder="Username" value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} />
        <input className="password" type="password" align="center" placeholder="Password" onChange={(e) => setPasswordValue(e.target.value)}/>
        <button className="submit" align="center" disabled={!usernameValue || !passwordValue} onClick={onLogInClicked}>Sign in</button>
       <hr/>
       <p style={{marginLeft:"33%"}}>Sign in with google</p>
       <FcGoogle  disabled={!googleOauthUrl} onClick={() => { window.location.href = googleOauthUrl}}
         style={{marginLeft:"40%",fontSize:'3.3em',cursor:"pointer"}}/>
        <p className="forgot-link" align="center">
          <Link to="/forgot-password">Forgot Password ?</Link>
        </p>
      </div>
    </>
  );
}
