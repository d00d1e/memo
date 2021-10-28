import axios from "axios";

let API;

if (process.env.NODE_ENV === "development") {
  API = axios.create({ baseURL: "http://localhost:5000" });
}

if (process.env.NODE_ENV === "production") {
  API = axios.create({ baseURL: "https://reactjs-memo-app.herokuapp.com" });
}

// send token to backend middleware
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// POST API
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const likePost = (id) => API.patch(`/posts/${id}/likes`);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// USER API
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
