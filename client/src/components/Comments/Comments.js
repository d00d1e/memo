import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@material-ui/core";

import { commentPost } from "../../redux/actions/postsActions";
import useStyles from "./styles";

export default function Comments({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post?.comments);
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleSubmit = async () => {
    const userComment = `${user?.profileData.name} : ${comment}`;
    const newComments = await dispatch(commentPost(userComment, post._id));

    setComments(newComments);
    setComment("");
  };

  return (
    <Container>
      <div className={classes.commentsOuterContainer}>
        <Typography gutterBottom variant="h6">
          Comments
        </Typography>
        <div className={classes.commentsInnerContainer}>
          {comments?.map((comment, i) => (
            <Typography key={i} variant="subtitle1">
              {comment}
            </Typography>
          ))}
        </div>

        {user?.profileData.name && (
          <>
            <Divider style={{ margin: "30px 0 20px 0" }} />
            <div className={classes.commentForm}>
              <TextField
                fullWidth
                rows={4}
                variant="outlined"
                label="Leave a comment"
                multiline
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <br />
              <Button
                style={{ marginTop: "10px" }}
                fullWidth
                disabled={!comment.length}
                color="primary"
                variant="contained"
                onClick={handleSubmit}
              >
                Comment
              </Button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
