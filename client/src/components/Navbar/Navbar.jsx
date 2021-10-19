import { AppBar, Typography } from "@material-ui/core";
import React from "react";

import memoIcon from "../../img/icon-memo64.png";
import useStyles from "./styles";

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar postition="static" color="inherit" className={classes.appBar}>
      <Typography className={classes.heading} variant="h3">
        Memo
      </Typography>
      <img className={classes.image} src={memoIcon} alt="memo" height="60" />
    </AppBar>
  );
}
