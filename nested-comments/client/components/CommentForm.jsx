import { useState } from "react";
import { createComment, updateComment } from "../services/comments";

const CommentForm = ({ parentId, textToShow, commentId }) => {
  const [message, setMessage] = useState(textToShow);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  async function handleSubmit() {
    setLoading(true);
    if (!parentId) parentId = null;
    try {
      if (!commentId) {
        const response = await createComment({ message, parentId });
        if (response.error) {
          setError(response.error);
        } else {
          setMessage("");
        }
      } else {
        const response = await updateComment({ message, commentId });
        if (response.error) {
          setError(response.error);
        }
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
