import { combineReducers } from "redux";
import filterReducer from "./filter";
import todoReducer from "./todo";

const rootReducer = combineReducers({
  todoReducer,
  filterReducer
});

export default rootReducer;