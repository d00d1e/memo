import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Post from "./Post/Post";

import useStyles from "./styles";

export default function Posts({ user, setCurrentId }) {
  const classes = useStyles();
  const { posts, isLoading } = useSelector((state) => state.posts);

  if (!posts.length && !isLoading) return "No memos";

  return isLoading ? (
    <Grid container alignItems="center" justifyContent="center">
      <CircularProgress />
    </Grid>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={4} xl={3}>
          <Post user={user} post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}
