import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineExternalLink} from "react-icons/hi";

const BlogsList = ({ blogs }) => (
    <>
    {blogs.map((blog, key) => (
    <div className="blog-list-card" >
        <div className="meta">
          <div className="photo" >
            <img src={blog.imageUrl} alt="blog"/>
          </div>
        </div>
      <div className="description">
       <h1 className="blog-list-title">{blog.title}</h1>
        <p>{blog.content[0].substring(0, 150)}...</p>
        <p id="read-more">
         <Link to={`/blog/${blog.name}`}>Read more <HiOutlineExternalLink/></Link>
        </p>
      </div>
    </div>))}
    </>
);

export default BlogsList;

