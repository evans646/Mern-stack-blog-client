import React, { useState } from "react";
import {Link,NavLink} from "react-router-dom";
import { RiMenu5Fill} from "react-icons/ri";
import { AiOutlineClose} from "react-icons/ai";
import logo from "../logo.svg";

import { useUser } from '../authentication/useUser';

export function NavBar () {


  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const user = useUser();

  return user ?(
    <div className="main-navbar">
      <div className="navbar-links">
        <div className="navbar-logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="navlinks-wrapper">
          <p><NavLink to="/">Home</NavLink></p>
          <p><Link to="/all-blogs">All Blogs</Link>{""}</p>
        </div>
      </div>
      <div className="navbar-sign-links">
      <p><Link to="/signout" onClick={handleLogOut}>Sign out</Link></p>
      </div>
      <div className="nav-menu">
        {toggleMenu
          ? <AiOutlineClose color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu5Fill color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navMenu-container scale-up-center">
          <div className="navMenu-links">
            <p><Link to="/">Home</Link>{""}</p>
            <p><Link to="/all-blogs">All Blogs</Link>{""}</p>
            <p><Link to="/signout" onClick={handleLogOut}>Sign out</Link></p>
          </div>
          <div className="navbar-sign-links">
          <p><Link to="/signout" onClick={handleLogOut}>Sign out</Link></p>
          </div>
        </div>
        )}
      </div>
    </div>
  ):(
    <div className="main-navbar">
    <div className="navbar-links">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navlinks-wrapper">
        <p><Link to="/">Home</Link></p>
        <p><NavLink to="/all-blogs">All Blogs</NavLink></p>
      </div>
    </div>
    <div className="navbar-sign-links">
      <p><Link to="/signin">Sign in</Link></p>
      <button type="button"><Link to="/signup"  className="signup-link">Sign up</Link></button>
    </div>
    <div className="nav-menu">
      {toggleMenu
        ? <AiOutlineClose color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu5Fill color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
      <div className="navMenu-container scale-up-center">
        <div className="navMenu-links">
          <p><Link to="/">Home</Link>{""}</p>
          <p><Link to="/all-blogs">All Blogs</Link>{""}</p>
        </div>
        <div className="navMenu-sign-links">
          <p><Link to="/signin">Sign in</Link>{""}</p>
          <button type="button"><Link to="/signup" className="signup-btn"><p>Sign up</p></Link></button>
        </div>
      </div>
      )}
    </div>
  </div>
  )
};