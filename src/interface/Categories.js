import React from "react";
import {Link } from "react-router-dom";

export function Categories(){
    return(
    <div className="columns categories">
        <span className="title">Categories</span>
        <section>
          <Link to="#"> Education</Link>
          <Link to="#">Web Development</Link>
          <Link to="#">Javascript</Link>
          <Link to="#">Process of aquiring knowledge</Link>
        </section>
    </div>
    )
};