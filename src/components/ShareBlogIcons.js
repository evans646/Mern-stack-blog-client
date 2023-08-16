import React from "react";
import { Link } from "react-router-dom";

export function SocialShareIcons() {
  return (
    <div className="share-blogIcons">
      <h3>Share Blog</h3>
      <Link to="https://twitter.com/share?url={}" target="_blank"
        className="share-btn twitter">
        <i className="fa fa-twitter"></i>
      </Link>
      <Link to="https://plus.google.com/share" target="_blank"
        className="share-btn google-plus">
        <i className="fa fa-google-plus"></i>
      </Link>
      <Link to="https://www.facebook.com/sharer/sharer"  target="_blank"  className="share-btn facebook">
        <i className="fa fa-facebook"></i>
      </Link>
      <Link to="https://www.linkedin.com/share"  target="_blank" className="share-btn linkedin">
         <i className="fa fa-linkedin"></i>
      </Link>
      <Link to="mailto:?subject=HMTL%20Share%20Buttons&body={}" target="_blank"  className="share-btn email" >
        <i className="fa fa-envelope"></i>
      </Link>
    </div>
  );
}
