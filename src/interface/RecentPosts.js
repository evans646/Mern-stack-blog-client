import React from "react";
import {Link} from "react-router-dom";

export function RecentPosts({blogs}){

  
    return(
        <div className="columns posts">
            <h2>Recent Posts</h2>

            {
               blogs.map((blog)=>(
                 <section>
                    <Link to={`/blog/${blog.name}`}><img src={blog.imageUrl} 
                    alt="" loading="lazy"/><p>{blog.title}</p></Link>
                 </section>
               ))
            }
     </div>
    )
};
