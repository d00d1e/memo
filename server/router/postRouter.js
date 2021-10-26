import express from "express";
import {
  createPost,
  getPostsBySearch,
  getPosts,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/postController.js";
import { isAuth } from "../middleware/isAuth.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/search", getPostsBySearch);
postRouter.post("/", isAuth, createPost);
postRouter.patch("/:id", isAuth, updatePost);
postRouter.patch("/:id/likes", isAuth, likePost);
postRouter.delete("/:id", isAuth, deletePost);

export default postRouter;
