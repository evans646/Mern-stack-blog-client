import React from "react";
  import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import {
    NotFoundPage,
    HomePage,
    BlogsListPage,
    BlogPage,
    SignInPage,
    SignUpPage,
    PleaseVerifyEmailPage,
    ForgotPasswordPage,
    EmailVerificationLandingPage,
    PasswordResetLandingPage
  } from"./pages/index";

  import {
    PrivateRoute 
  }from "./authentication/PrivateRoute";
import {
    NavBar,
    Footer
  } from"./interface/index";
import "./App.css";




  export function PageRoutes(){
    return(
      <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/all-blogs" element={<BlogsListPage/>} />
          <Route path="/blog/:name" element={<BlogPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/please-verify" element={<PrivateRoute><PleaseVerifyEmailPage/></PrivateRoute>} />
          <Route path="/verify-email/:verificationString" element={<EmailVerificationLandingPage/>} />
          <Route path="/reset-password/:passwordResetCode" element={<PasswordResetLandingPage/>} />
          <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
          <Route path="/signin" element={<SignInPage/>} />
          <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    )
  };