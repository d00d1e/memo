import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core";

import memoIcon from "../../img/icon-memo64.png";
import useStyles from "./styles";

export default function Navbar() {
  const classes = useStyles();

  const user = null;

  const handleLogout = () => {};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h3"
            align="center"
          >
            Memo
          </Typography>
          <img
            className={classes.image}
            src={memoIcon}
            alt="memo"
            height="40"
          />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.avatar}
                alt={user.result.name}
                src={user?.result.imageUrl}
              >
                {user.result.name.charAt(0).toUpperCase()}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
              <Button
                className={classes.logout}
                variant="contained"
                color="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
