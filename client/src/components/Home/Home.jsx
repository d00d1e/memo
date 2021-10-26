import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/postsActions";
import { Container, Grow, Grid, Paper } from "@material-ui/core";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import useStyles from "./styles";
import Paginate from "../Paginate/Paginate";

// page info
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function Home() {
  const [currentId, setCurrentId] = useState(null);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get("page") || 1;
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          className={classes.gridContainer}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts user={user} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Form
              user={user}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
            <Paper className={classes.pagination} elevation={6}>
              <Paginate page={page} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}
