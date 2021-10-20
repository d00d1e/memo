import React from "react";
import { Container } from "@material-ui/core";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import "./index.css";

export default function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Home />
    </Container>
  );
}
