import { usePost } from "../context/PostContext";
import RenderComments from "./RenderComments";

const Post = () => {
  const { post, groupedComments, getReplies } = usePost();
  return (
    <div className="container">
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h1 className="divider"></h1>
      <h3>Comments</h3>
      <div>
        <RenderComments
          groupedComments={groupedComments}
          getReplies={getReplies}
        />
      </div>
    </div>
  );
};

export default Post;
