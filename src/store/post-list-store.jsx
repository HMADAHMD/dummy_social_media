import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {}
});

const postListReducer = (currentPostList, action) => {

  switch (action.type) {
    case "ADD_POST":
      return [...currentPostList, action.payload];
    case "INITIAL_POST":
      return action.payload.posts;
    case "DELETE_POST":
      return currentPostList.filter(post => post.id!== action.payload);
    default:
      return currentPostList;
  }
}

const PostListProvider = ({children}) => {

  const [fetching, setFetching] = useState(false)
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  
  const addPost = (post) => {
    const addPostList = {
      type: "ADD_POST",
      payload: post
    };
    dispatchPostList(addPostList);
  }
  
  const addInitialPosts = (posts) => {
    const addInitialPostsList = {
      type: "INITIAL_POST",
      payload: { posts }
    };
    dispatchPostList(addInitialPostsList);
  }
  
  const deletePost = (postID) => {
    const deletePostList = {
      type: "DELETE_POST",
      payload: postID
    };
    dispatchPostList(deletePostList);
  }
  
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) => {
      addInitialPosts(data.posts);
      setFetching(false)
    });
    return () => {
      controller.abort();
    };
  }, []);

  return <PostList.Provider value={{postList, addPost, deletePost, fetching}}>
    {children}
    </PostList.Provider>
};

const DEFAULT_POST_LIST = [
  
]

export default PostListProvider;