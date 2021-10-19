import React from "react";
import { Container, Grid, Grow } from "@material-ui/core";

import Form from "../../components/Form/Form";
import Posts from "../../components/Posts/Posts";

import useStyles from "./styles";

export default function Home() {
  const classes = useStyles();

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={classes.gridContainer}
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
  );
}
