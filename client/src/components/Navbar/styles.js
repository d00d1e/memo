import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,0,0, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
}));
