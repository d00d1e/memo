import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/postsActions";

import Home from "./views/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import "./index.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <Navbar />
      <Home />
    </Container>
  );
}
