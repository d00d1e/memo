import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

import { LOGOUT } from "../../redux/constants/authConstants";

import memoIcon from "../../img/icon-memo64.png";
import useStyles from "./styles";

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const handleLogout = () => {
    dispatch({ type: LOGOUT });

    history.push("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    //JWT
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user?.token]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h3"
        >
          Memo
        </Typography>
        <img className={classes.image} src={memoIcon} alt="memo" height="40" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.profileData ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.avatar}
              alt={user?.profileData.name}
              src={user?.profileData.imageUrl}
            >
              {user?.profileData.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.profileData.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
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
  );
}
