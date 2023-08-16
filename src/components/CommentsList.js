import React from "react";
import {Link} from "react-router-dom";
import Avatar from "react-avatar";

const CommentsList = ({ comments}) => (
    <div className="comments-wapper">
     <h3 style={{padding:'2%',fontWeight:'600'}}>{comments.length > 1 ?  `${comments.length } Comments` :`${comments.length } Comment`}</h3>
       <ul className="comments list-unstyled">
        {
            comments.map((comment,key)=>(
               <li className="clearfix" key={key}>
					<Avatar name={comment.username} className="avatar"  size="65"  round={true} />
                    <div className="post-comments">
                        <p className="meta">
                         <Link to="#">{comment.username}</Link> says:
                        </p>
                         <h6>
                      {comment.text}
                         </h6>
                    </div>
                </li>
            ))
        }
       </ul>
    </div>
);

export default CommentsList;


