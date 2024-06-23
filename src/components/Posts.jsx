import { useContext } from "react";
import Post from "./Post";
import {PostList} from "../store/post-list-store";

const Posts = () => {
  const { postList } = useContext(PostList);
  return(
  <>
  {
    postList.map((post) => (
      <Post key={post.id} post={post}/>
    ))
  }
  </>
)
}

export default Posts