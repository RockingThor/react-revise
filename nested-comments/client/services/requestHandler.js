import axios from "axios";

const apiEndpoint = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export function makeRequest(url, options) {
  return apiEndpoint(url, options)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err?.response?.data?.message || "Error"));
}
