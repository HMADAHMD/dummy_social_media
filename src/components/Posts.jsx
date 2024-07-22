import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList} from "../store/post-list-store";
import Welcome from "./Welcome";
import Loader from "./Loader";
import { useLoaderData } from "react-router-dom";

const Posts = () => {
  // const { postList } = useContext(PostList);
  const postList = useLoaderData()

  return(
  <>

    {postList.length === 0 && <Welcome></Welcome>}
    {
      postList.map((post) => (
        <Post key={post.id} post={post}/>
      ))
    }
  </>
)
}


export const postLoader = () => {
  return fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then((data) => {
    return data.posts;
  });
};

export default Posts