import { makeRequest } from "./requestHandler";

export function getPosts() {
  return makeRequest("/posts");
}
