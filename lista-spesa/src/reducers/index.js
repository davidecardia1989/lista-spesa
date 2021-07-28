import { combineReducers } from "redux";
import HomepageReducer from "./HomepageReducer";
import LoginReducer from "./LoginReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  home: HomepageReducer,
});

export default rootReducer;
