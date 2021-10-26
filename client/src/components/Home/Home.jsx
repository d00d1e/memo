import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../redux/actions/postsActions";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";

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
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const classes = useStyles();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddTag = (tag) => setTags([...tags, tag]);

  const handleDeleteTag = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));

      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

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
            <AppBar
              className={classes.searchBar}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                label="Search Memos"
                variant="outlined"
                value={search}
                fullWidth
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                label="Search Tags"
                variant="outlined"
                value={tags}
                onAdd={handleAddTag}
                onDelete={handleDeleteTag}
              />
              <Button variant="contained" color="primary" onClick={searchPost}>
                Search
              </Button>
            </AppBar>
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
