import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const url = "https://employeemanager741.herokuapp.com/posts";
// const url = process.env.EMPLOYEE_MANAGER_URL;
// const url = "http://localhost:4000/posts";

export const createPost = (newPost) => axios.post(url, newPost);
export const fetchPosts = () => axios.get(url);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
