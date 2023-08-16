import React from "react";
import {Link} from "react-router-dom";
import {HiOutlineTrendingUp} from "react-icons/hi";

import {
    RecentComments,
    RecentPosts,
    SocialIcons,
}from "../interface/index";

import blogs from "../data/blog-content";
import SearchPage from "../pages/searchPage";

import TrendingBlogsList from "../components/TrendingBlogsList";

export function TrendingBlogs (){
    return(
    <>
     <div className="blog-content">
        <h2>
          Trending Posts
        <HiOutlineTrendingUp className="trending-icon"/> 
        </h2>
        <div className="left-content">
          <TrendingBlogsList/>
        </div>
        <button className="btn1 load-btn"><Link to="/all-blogs">All blogs</Link></button>
     </div>
     <div className="blog-content right-content">
         <SearchPage/>
         <RecentPosts blogs={blogs.slice(0,3)}/>
         <RecentComments comments={blogs.comment}/>
         <SocialIcons/>
      </div>
    </>
    )
};