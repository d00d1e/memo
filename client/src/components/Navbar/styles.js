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
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "290px",
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
