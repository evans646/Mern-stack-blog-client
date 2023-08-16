import React, { useState, useEffect } from "react";
import {SearchBar} from "../interface/index";
import blogContent from "../data/blog-content";

const SearchPage = (props) => {
  const [blogList, setBlogList] = useState();
 
  const fetchData = async () => {
        setBlogList(blogContent)
       };


  useEffect( () => {fetchData()},[]);
  return (
    <>
      <SearchBar data={blogList}/>
    </>
   );
};

export default SearchPage