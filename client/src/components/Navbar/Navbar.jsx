import { AppBar, Box, Typography } from "@material-ui/core";
import React from "react";

import memoIcon from "../../img/icon-memo64.png";
import useStyles from "./styles";

export default function Navbar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography className={classes.heading} variant="h3" align="center">
            Memo
          </Typography>
          <img
            className={classes.image}
            src={memoIcon}
            alt="memo"
            height="40"
          />
        </div>
      </AppBar>
    </Box>
  );
}
