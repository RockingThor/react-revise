import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getIndividualPost } from "../services/posts";

const Context = createContext();

export function usePost() {
  return useContext(Context);
}

// eslint-disable-next-line react/prop-types
export function PostProvider({ children }) {
  const { id } = useParams();
  const { loading, error, value } = useAsync(() => getIndividualPost(id), [id]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    if (value?.comments) return;
    setComment(value?.comments);
  }, [value?.comments]);

  const groupedCommentsByParent = useMemo(() => {
    if (loading || error || !comment) return [];
    let comments = {};
    comment.forEach((com) => {
      if (com.parentId === null) {
        let prev = comments[null];
        if (prev) {
          comments[null] = [...prev, com];
        } else {
          comments[null] = [com];
        }
      } else {
        let prev = comments[com.parentId];
        if (prev) {
          comments[com.parentId] = [...prev, com];
        } else {
          comments[com.parentId] = [com];
        }
      }
    });
    return comments;
  }, [comment, loading, error]);

  function addCommentLocally(comm) {
    setComment((prevComment) => {
      return [comm, ...prevComment];
    });
  }

  function getReplies(parentId) {
    return groupedCommentsByParent[parentId];
  }
  return (
    <Context.Provider
      value={{
        post: { id, ...value },
        groupedComments: groupedCommentsByParent,
        getReplies,
        addCommentLocally,
      }}
    >
      {loading ? <h1>Loading...</h1> : error ? <h1>Error</h1> : children}
    </Context.Provider>
  );
}
