import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList} from "../store/post-list-store";
import Welcome from "./Welcome";
import Loader from "./Loader";

const Posts = () => {
  const { postList, fetching } = useContext(PostList);

  return(
  <>
    {fetching && <Loader/>}
    {!fetching && postList.length === 0 && <Welcome></Welcome>}
    {
      !fetching && postList.map((post) => (
        <Post key={post.id} post={post}/>
      ))
    }
  </>
)
}

export default Posts