import mongoose from "mongoose";
import Post from "../models/postModel.js";

// GET POSTS
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// CREATE POST
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

// UPDATE POST
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No memo with that id");
  } else {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { ...post, id },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
};

// LIKE POST
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No memo with that id");
  } else {
    try {
      const post = await Post.findById(id);
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { likes: post.likes + 1 },
        { new: true }
      );

      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
};

// DELETE POST
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No memo with that id");
  } else {
    try {
      await Post.findByIdAndRemove(id);
      res.status(200).json({ message: "Memo deleted successfully" });
    } catch (error) {
      res.status(404).res.json({ message: error });
    }
  }
};
