import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/postsActions";

import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import "./index.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <Navbar />
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
