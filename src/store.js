import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import Thunk from "redux-thunk";

const initState = {};
const middleware = [Thunk];
export const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(...middleware)
);
