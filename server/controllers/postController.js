import mongoose from "mongoose";
import Post from "../models/postModel.js";

// GET POST
export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// GET POSTS (by page)
export const getPosts = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await Post.countDocuments({});

    const posts = await Post.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// GET POSTS BY SEARCH
export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i"); // ignore case

    const posts = await Post.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATE POST
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post({
    ...post,
    creatorId: req.userId,
    createdAt: new Date().toISOString(),
  });

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

  if (!req.userId) return res.json({ message: "Access Denied" });

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No memo with that id");
  } else {
    try {
      const post = await Post.findById(id);
      const liked = post.likes.findIndex((id) => id === String(req.userId));

      // like/unlike post
      if (liked === -1) {
        post.likes.push(req.userId);
      } else {
        post.likes.filter((id) => id !== String(req.userId));
      }

      const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });

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
