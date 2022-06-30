import { combineReducers } from "redux";
import DeviceTypeReducer from "./DeviceTypeReducers";
import LoginReducer from "./LoginReducer";
import ResetPasswordReducer from "./ResetPasswordReducers";
import RoleReducer from "./RoleReducer";
import ServiceReducer from "./ServiceReducers";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  resetPassword: ResetPasswordReducer,
  role: RoleReducer,
  user: UserReducer,
  deviceType: DeviceTypeReducer,
  service: ServiceReducer,
});

export default RootReducer;
