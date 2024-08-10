import { makeRequest } from "./requestHandler";

export function createComment({ message, parentId, postId }) {
  return makeRequest(`/posts/${postId}/comments`, {
    method: "POST",
    data: { message, parentId },
  });
}

export function updateComment({ message, commentId }) {
  return makeRequest(`/posts/comments/${commentId}`, {
    method: "PUT",
    data: { message },
  });
}

export function deleteComment({ commentId }) {
  return makeRequest(`/posts/comments/${commentId}`, {
    method: "DELETE",
  });
}
