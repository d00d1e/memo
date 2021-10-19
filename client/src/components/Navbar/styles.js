import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 50px",
    margin: "30px 0",
  },
  heading: {
    color: "rgba(0,0,0, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: 15,
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
