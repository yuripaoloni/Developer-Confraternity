import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";

// As the name implies, combines all the reducers used in the application. This function is called in store creation (store.js)
export default combineReducers({
  alert,
  auth,
  profile,
  post
});
