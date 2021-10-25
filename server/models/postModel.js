import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  author: String,
  title: String,
  message: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Post", postSchema);
