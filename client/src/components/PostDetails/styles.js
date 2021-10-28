import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  postDetailsContainer: {
    padding: 20,
  },
  media: {
    objectFit: "cover",
    width: "100%",
    maxHeight: "600px",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: 10,
    flex: 1,
  },
  imageSection: {
    marginLeft: 20,
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "100%",
    },
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  recommendedCard: {
    padding: 20,
  },
}));
