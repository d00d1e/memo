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
  const commentsRef = useRef();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post?.comments);
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleSubmit = async () => {
    const userComment = `${(user?.profileData.name)
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} : ${comment}`;
    const newComments = await dispatch(commentPost(userComment, post._id));

    setComments(newComments);
    setComment("");

    // auto scroll
    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <div className={classes.commentsOuterContainer}>
        <Typography variant="h6" gutterBottom>
          Comments
        </Typography>
        <div className={classes.commentsInnerContainer}>
          {comments?.map((c, i) => (
            <Typography key={i} variant="subtitle1">
              <strong>{c.split(": ")[0]}</strong> &nbsp; {c.split(":")[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
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
