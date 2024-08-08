import { createContext, useContext, useMemo } from "react";
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
  const groupedCommentsByParent = useMemo(() => {
    if (loading || error) return [];
    let comments = {};
    value.comments.forEach((com) => {
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
  }, [value?.comments]);

  function getReplies(parentId) {
    return groupedCommentsByParent[parentId];
  }
  return (
    <Context.Provider
      value={{
        post: { id, ...value },
        groupedComments: groupedCommentsByParent,
        getReplies,
      }}
    >
      {loading ? <h1>Loading...</h1> : error ? <h1>Error</h1> : children}
    </Context.Provider>
  );
}
