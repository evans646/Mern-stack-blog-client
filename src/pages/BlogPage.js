import React, { useState, useEffect } from "react";
import {  useParams,Link } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import readingTime from "reading-time";
import {IoBookOutline} from "react-icons/io5";
import {BsFileWord} from "react-icons/bs";


import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";
import ReadNextBlogsFilter from "../components/ReadNext";


import {NotFoundPage} from "./index"; 
import blogs from "../data/blog-content";
import {useUser} from "../authentication/useUser";
import {SocialShareIcons} from "../components/ShareBlogIcons";

export function BlogPage () {
    const {name} = useParams();
    const user = useUser();
    const {id} = user || "";


    const blog = blogs.find(blog => blog.name === name);

    const [blogInfo, setBlogInfo] = useState({ upvotes: 0, comments: [],upvotedIds:[]});
       //for ring-loader 
    const [loading, setLoading] = useState(false);
    let   [color, setColor] = useState("#ffffff");

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8080/api/blogs/${name}`);
            const body = await result.json();
            setLoading(true);
            setColor("#207d9c");
            setTimeout(() => {
              setLoading(false);
            },800); 
            setBlogInfo(body);
        }
        fetchData();
    }, [name]);

 const loadingMessage = (
        <div className="loading-messageWrapper">
          <ClimbingBoxLoader color={color} loading={loading} size={10} /> 
          <h2>Loading blog...</h2>
        </div>
   );
  
    if(loading) return loadingMessage;
  
    if (!blog) return <NotFoundPage />
    
  
    
    const stats = readingTime(blog.content.map(content=>content.toString()));

    const upvoteData = blogInfo.upvotedIds||"";
    const checkUserUpvote= Object.values(upvoteData).filter((userId) => userId === id).length > 0 ? true : false;
   


    return (
     <div id="page-body">
          <h1 className="page-title">{blog.title}</h1>
          <Link to="#" className="figure">
            <img  src={blog.imageUrl} 
            alt="blog" loading="lazy"  style={{width:"100%",height:"18%",borderRadius:"5px",padding:"1px"}}/>
          </Link>
          <section id="stats-section">
          <IoBookOutline size={40} id="read-time"/><span>{stats.text==='0 min read' ? '1 min read':stats.text}</span>
          <BsFileWord  size={40} id="read-time"/><span>{stats.words ===0 ? "239 words":stats.words + "word"}</span>
          </section>
          <section className="blog-p-wrapper">
          {blog.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
          </section>
        <SocialShareIcons/>
        <UpvotesSection blogName={name} upvotes={blogInfo.upvotes} setBlogInfo={setBlogInfo} hasUpvoted={checkUserUpvote} stats={stats}/>
        <CommentsList comments={blogInfo.comments} name={blogInfo.comments.name}/>
        <AddCommentForm blogName={name} setBlogInfo={setBlogInfo} />
        <h2 style={{padding:"10px"}}>Read next Posts</h2>
        <ReadNextBlogsFilter name={name}/>
      </div>
    );
};

