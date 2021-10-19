import { CREATE_POST, FETCH_POSTS } from "../constants/postsConstants";

export const postsReducer = (posts = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
