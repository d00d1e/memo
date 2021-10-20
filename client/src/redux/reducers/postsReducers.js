import {
  CREATE_POST,
  FETCH_POSTS,
  UPDATE_POST,
} from "../constants/postsConstants";

export const postsReducer = (posts = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    case UPDATE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
