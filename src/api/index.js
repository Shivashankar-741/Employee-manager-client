import axios from "axios";

// const url = process.env.EMPLOYEE_MANAGER;
const url = "http://localhost:4000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
