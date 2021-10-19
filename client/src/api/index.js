import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// POST API
export const fetchPosts = () => API.get("/posts");
