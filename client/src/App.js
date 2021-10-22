import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
