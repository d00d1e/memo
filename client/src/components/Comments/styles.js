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
    listStyle: "none",
    "&::-webkit-scrollbar": {
      width: "0.7em",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(255,255,255,0.0)",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 3,
      backgroundColor: "#6b6b6b",
      minHeight: 30,
      // border: "3px solid #2b2b2b",
    },
  },
  commentForm: {
    width: "100%",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
}));
