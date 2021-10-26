import * as api from "../../api";
import {
  CREATE_POST,
  DELETE_POST,
  FETCH_POSTS,
  FETCH_POSTS_BY_SEARCH,
  LIKE_POST,
  UPDATE_POST,
} from "../constants/postsConstants";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);

    console.log(data);
    dispatch({ type: FETCH_POSTS_BY_SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};
