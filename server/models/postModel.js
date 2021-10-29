import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  creatorId: String,
  author: String,
  title: String,
  message: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  comments: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Post", postSchema);
