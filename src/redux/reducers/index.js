import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { productReducer } from "./productsReducer";

export const rootReducer = combineReducers({
  counterReducer,
  productReducer,
});
