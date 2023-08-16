import React,{useState,useEffect} from 'react';
import BlogsList from '../components/BlogsList';
import blogContent from "../data/blog-content";


const postsPerPage = 6;
let arrayForHoldingPosts = [];

export function BlogsListPage(){
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(6);


  const loopWithSlice = (start, end) => {
    const slicedPosts = blogContent.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  }; 
   


    return(
      <div className="blogs-list"> 
           <h1>Blogs</h1> 
          <BlogsList blogs={postsToShow} />
         {postsPerPage.length === blogContent.length ? <p className="end">You have reached the end</p> : <button onClick={handleShowMorePosts} className="loadmore-blogs-btn">Load more</button>}
      </div>
    )
};
