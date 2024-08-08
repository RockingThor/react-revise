import { makeRequest } from "./requestHandler";

export function getPosts() {
  return makeRequest("/posts");
}

export function getIndividualPost(id) {
  return makeRequest(`/posts/${id}`);
}
