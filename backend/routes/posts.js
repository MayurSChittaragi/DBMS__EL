import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
  addCart,
  removeCart,
} from "../controllers/postsCon.js";
import { getUsers, register, login } from "../controllers/authCon.js";

const router = express.Router();
router.get("/posts", getPosts);
router.get("/users", getUsers);
router.post("/create", createPost);
router.delete("/delete/:id", deletePost);
router.post("/register", register);
router.patch("/addCart/:id", addCart);
router.patch("/removeCart/:id", removeCart);
router.post("/login", login);

export default router;
