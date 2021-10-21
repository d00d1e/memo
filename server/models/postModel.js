import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  author: String,
  title: String,
  message: String,
  tags: [String],
  selectedFile: String,
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Post", postSchema);
