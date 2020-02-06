import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";
import { STATES } from "mongoose";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  //to check that we already load user from db
  loading: true,
  user: null
};

export default function(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
