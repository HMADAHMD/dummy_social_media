import { useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";


const CreatePost = () => {

  const { addPost } = useContext(PostList);

  const title = useRef();
  const body = useRef();
  const reactions = useRef();
  const tags = useRef();

  const postButton = (event) => {
    const inputTitle = title.current.value;
    const inputBody = body.current.value;
    const inputReaction = reactions.current.value;
    const inputTags = tags.current.value.split(" ");
    title.current.value = "";
    body.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
    addPost({title: inputTitle, body: inputBody, reactions: inputReaction, tags: inputTags})
    event.preventDefault()
  }

  return (
    <div className="form-container">
      <form style={{maxWidth: "400px"}} onSubmit={postButton}>
        <div className="mb-3">
          <label htmlFor="exampleInputtitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="exampleInputtitle" ref={title}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputdescription" className="form-label">Body</label>
          <input type="text" className="form-control" id="exampleInputdescription" ref={body}/>
        </div>
        <div className="mb-3">
          <label htmlFor="InputReactions" className="form-label">Reactions</label>
          <input type="text" className="form-control" id="InputReactions" ref={reactions}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Inputags" className="form-label">Tags</label>
          <input type="text" className="form-control" id="Inputags" ref={tags}/>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;