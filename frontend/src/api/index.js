import axios from "axios";

// const url = "http://localhost:5000/posts";
const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
  },
});

export const fetchPosts = () => API.get("/posts");
export const fetchUsers = () => API.get("/users");
export const createPost = (newPost) => API.post("/create", newPost);
export const deletePost = (id) => API.delete(`/delete/${id}`);
export const registerUser = (data) => API.post("/register", data);
export const addCart = (id) => API.patch(`/addCart/${id}`);
export const removeCart = (id) => API.patch(`/removeCart/${id}`);
export const loginUser = (data) => API.post("/login", data);
