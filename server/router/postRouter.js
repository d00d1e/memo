import express from "express";
import {
  commentPost,
  createPost,
  getPost,
  getPosts,
  getPostsBySearch,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/postController.js";
import { isAuth } from "../middleware/isAuth.js";

const postRouter = express.Router();

postRouter.get("/search", getPostsBySearch);
postRouter.get("/:id", getPost);
postRouter.get("/", getPosts);

postRouter.post("/", isAuth, createPost);
postRouter.patch("/:id", isAuth, updatePost);
postRouter.patch("/:id/likes", isAuth, likePost);
postRouter.post("/:id/comments", isAuth, commentPost);
postRouter.delete("/:id", isAuth, deletePost);

export default postRouter;
