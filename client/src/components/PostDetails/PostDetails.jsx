import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  Card,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import { getPost, getPostsBySearch } from "../../redux/actions/postsActions";
import useStyles from "./styles";

export default function PostDetails() {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Grid container alignItems="center" justifyContent="center">
        <CircularProgress />
      </Grid>
    );
  }

  // remove current post from recommended
  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  const openPost = (_id) => {
    history.push(`/posts/${_id}`);
  };

  return (
    <Paper className={classes.postDetailsContainer} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography variant="h6" style={{ marginTop: 20 }}>
            <b>Memo by</b>:{" "}
            {post.author
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: 20, color: "grey", fontStyle: "italic" }}
          >
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>

          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Comments - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>

      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <Grid container spacing={2} className={classes.recommendedPosts}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {recommendedPosts.map(
                ({ title, author, message, likes, selectedFile, _id }) => (
                  <div
                    style={{ margin: "20px", cursor: "pointer" }}
                    onClick={() => openPost(_id)}
                    key={_id}
                  >
                    <Card className={classes.recommendedCard} elevation={4}>
                      <Typography variant="h6" gutterBottom>
                        {title}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        By:{" "}
                        {author
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        {message}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Likes: {likes.length}
                      </Typography>
                      <img src={selectedFile} width="200px" alt={title} />
                    </Card>
                  </div>
                )
              )}
            </Grid>
          </Grid>
        </div>
      )}
    </Paper>
  );
}
