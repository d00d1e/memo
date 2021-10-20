import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
} from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.patch("/:id", updatePost);

export default postRouter;
