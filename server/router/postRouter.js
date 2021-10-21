import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.patch("/:id", updatePost);
postRouter.patch("/:id/likes", likePost);
postRouter.delete("/:id", deletePost);

export default postRouter;
