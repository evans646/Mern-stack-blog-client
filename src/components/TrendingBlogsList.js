import React from 'react';
import {Link} from "react-router-dom";
import blogs from "../data/blog-content";
import {HiOutlineExternalLink} from "react-icons/hi";

const TrendingBlogs = blogs.slice(1,6);

const TrendingBlogsList  = () => {
    return(
        <>
         {TrendingBlogs.map((blog,key)=>
        <div className="blog-card"  key={key}>
         <Link to={`/blog/${blog.name}`} className="figure">
         <img src={blog.imageUrl} alt="blog" loading="lazy"/>
         <span className="tag">JUN 22</span>
          </Link>
         <section>
            <Link to={`/blog/${blog.name}`}>
            <Link to={`/blog/${blog.name}`} className="title">{blog.title}</Link>
            <p>{blog.content[0].substring(0, 150)}...<span style={{color:"rgba(105, 175, 14, 0.81)"}}>continue reading <HiOutlineExternalLink/></span></p>
            </Link>
        </section>
    </div>
     )}
        </>
    )
};

export default TrendingBlogsList;