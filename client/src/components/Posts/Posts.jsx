import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";

export default function Posts() {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}