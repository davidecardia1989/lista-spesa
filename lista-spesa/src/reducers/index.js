import { combineReducers } from "redux";
import HomepageReducer from "./HomepageReducer";
import LoginReducer from "./LoginReducer";
import ShoppingChartReducer from "./ShoppingChartReducer";
// import ShoppingChartReducer from "./ShoppingChartReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  home: HomepageReducer,
  shoppingChart: ShoppingChartReducer,
  // productReducer: productReducer,
});

export default rootReducer;
