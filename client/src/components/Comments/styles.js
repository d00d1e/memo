import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  commentsOuterContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  commentsInnerContainer: {
    height: "200px",
    overflowY: "auto",
    marginRight: "30px",
  },
  commentForm: {
    width: "100%",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
}));
