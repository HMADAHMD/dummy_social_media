import Posts from "./Posts"

const Welcome = ({onGetPosts}) => {
  return(
    <>
      <h1>There is no task yet.</h1>
      <button type="button" className="btn btn-dark" onClick={onGetPosts}>Get Posts</button>
    </>
  );
}

export default Welcome;