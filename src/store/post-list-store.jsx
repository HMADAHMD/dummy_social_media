import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {}
});

const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...currentPostList, action.payload];
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

  const deletePost = (postID) => {
    const deletePostList = {
      type: "DELETE_POST",
      payload: postID
    };
    dispatchPostList(deletePostList);
  }

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);


  return <PostList.Provider value={{postList, addPost, deletePost}}>
    {children}
    </PostList.Provider>
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "trip to swat",
    body: "The golden rays of the setting sun painted the sky in hues of orange and pink, casting long shadows across the tranquil meadow. Birds chirped melodiously from the treetops, adding a symphony to the evening’s serenity.",
    reactions: 2,
    userId: "uuid1",
    tags: ["tour","trip","northern"]
  },
  {
    id: "2",
    title: "party",
    body: "The golden rays of the setting sun painted the sky in hues of orange and pink, casting long shadows across the tranquil meadow. Birds chirped melodiously from the treetops, adding a symphony to the evening’s serenity.",
    reactions: 10,
    userId: "uuid2",
    tags: ["college","party","enjoy"]
  }
]

export default PostListProvider;