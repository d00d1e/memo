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
    return res.status(404).send("No post with that id");
  } else {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { ...post, id },
      { new: true }
    );
    res.status(200).json(updatedPost);
  }
};

// DELETE POST
