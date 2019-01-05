import { combineReducers } from "redux";
import UserAuthReducer from "./authentication/Auth";
export default combineReducers({
  auth: UserAuthReducer
});
