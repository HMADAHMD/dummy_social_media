import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {}
});

const postListReducer = (currentPostList, action) => {
  // let newPostList = currentPostList
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

  const addPost = (newPost) => {
    const addPostList = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: newPost.title,
        body: newPost.body,
        reactions: newPost.reactions,
        userId: "uuid1",
        tags: newPost.tags
      }
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

  const [postList, dispatchPostList] = useReducer(postListReducer, []);


  return <PostList.Provider value={{postList, addPost, deletePost, addInitialPosts}}>
    {children}
    </PostList.Provider>
};

const DEFAULT_POST_LIST = [
  
]

export default PostListProvider;