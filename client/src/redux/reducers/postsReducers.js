import {
  CREATE_POST,
  DELETE_POST,
  FETCH_POSTS,
  FETCH_POSTS_BY_SEARCH,
  LIKE_POST,
  UPDATE_POST,
} from "../constants/postsConstants";

export const postsReducer = (posts = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POSTS_BY_SEARCH:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    case UPDATE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case LIKE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
