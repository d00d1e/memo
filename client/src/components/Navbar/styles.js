import { makeStyles } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 50px",
    margin: "30px 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  heading: {
    fontFamily: "Zen Kurenaido",
    color: "rgba(0,0,0, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: 15,
    marginTop: 5,
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    width: "350px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      marginTop: 20,
      justifyContent: "space-between",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
  },
  avatar: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
  },
}));
