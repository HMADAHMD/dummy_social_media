import { useContext } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({post}) => {
  const { deletePost } = useContext(PostList);

  return(
    <div className="card" style={{width: "35rem", margin: "15px"}}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      
        <button type="button" className="btn btn-secondary position-relative">
        <AiOutlineLike/>

          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {/* {post.reactions.likes} */}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>

        {/* {post.tags.map((tag)=> (
          <span key={tag} className="badge text-bg-secondary" style={{margin: '2px'}}>{tag}</span>
        ))} */}
      </div>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}>
          <MdDeleteOutline size={20}/>
            <span className="visually-hidden">unread messages</span>
          </span>
    </div>
  );
}

export default Post;