import * as api from "../../api";
import { AUTH, LOGOUT } from "../constants/authConstants";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    // log in user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    // signup user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
