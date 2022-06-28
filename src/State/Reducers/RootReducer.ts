import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import ResetPasswordReducer from "./ResetPasswordReducers";
import RoleReducer from "./RoleReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  resetPassword: ResetPasswordReducer,
  role: RoleReducer,
});

export default RootReducer;
