import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fetchpageCSS from './styles/fetchpage.module.css';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const APIFetchpage = () => {
    const [posts, setPosts] = useState([]);
    

    const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };
  
  // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
      fetchData();
    }, []);

    const canShowData = () => {
      if(posts.length > 0){
        return ( 
        <div className={fetchpageCSS.content}>
          {posts.map((post) => (
            <div className={fetchpageCSS.post}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
        )
      }
      else{
        return ( <p className={fetchpageCSS.loading}>Loading... </p> )
      }
    }

    return (
        <div className={fetchpageCSS.wrapper}>
          {canShowData()}
        </div>
      );
}

export default APIFetchpage;