import React from "react";
import {FaRegComment} from "react-icons/fa";


export function RecentComments(){
    return(
    <div className="columns comments">
          <h2>Recent Comments</h2>
        <section>
          <marquee className="marquee" direction="down" scrollamount="4" onMouseOver="this.stop()" onMouseOut="this.start()">
            <p> 
             <FaRegComment  id="recentComment-icon"/>

             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis totam illum suscipit neque accusamus possimus eum nulla illo explicabo.
            </p> 
            <p> 
              <FaRegComment  id="recentComment-icon"/>

              Voluptas blanditiis saepe officiis porro suscipit iure, neque pariatur aliquam architecto sequi a voluptate dolorem ad?
             </p> 
             <p> 
             <FaRegComment  id="recentComment-icon"/> Lorem  Voluptas blanditiis saepe officiis porro suscipit iure, neque pariatur aliquam architecto sequi a voluptate dolorem ad?
             </p> 
          </marquee>
        </section>
     </div>
    )
};

