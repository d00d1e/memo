import axios from "axios";

let API;

if (process.env.NODE_ENV === "development") {
  API = axios.create({ baseURL: "http://localhost:5000" });
}

if (process.env.NODE_ENV === "production") {
  API = axios.create({ baseURL: "https://reactjs-memo-app.herokuapp.com" });
}

// POST API
export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const likePost = (id) => API.patch(`/posts/${id}/likes`);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// AUTH API
