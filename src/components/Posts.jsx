import { useContext } from "react";
import Post from "./Post";
import {PostList} from "../store/post-list-store";
import Welcome from "./Welcome";

const Posts = () => {
  const { postList, addInitialPosts } = useContext(PostList);
  const handlePostsClick = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => addInitialPosts(data.posts));
  }

  return(
  <>
  {postList.length === 0 && <Welcome onGetPosts={handlePostsClick}></Welcome>}
  {
    postList.map((post) => (
      <Post key={post.id} post={post}/>
    ))
  }
  </>
)
}

export default Posts