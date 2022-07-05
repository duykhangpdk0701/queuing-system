import { combineReducers } from "redux";
import DeviceReducer from "./DeviceReducer";
import DevicesReducer from "./DevicesReducers";
import DeviceTypeReducer from "./DeviceTypesReducers";
import LoginReducer from "./LoginReducer";
import ResetPasswordReducer from "./ResetPasswordReducers";
import RoleReducer from "./RolesReducer";
import ServiceReducer from "./ServiceReducers";
import ServicesReducer from "./ServicesReducers";
import UserReducer from "./UserReducers";
import UsersReducer from "./UsersReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  resetPassword: ResetPasswordReducer,
  roles: RoleReducer,
  users: UsersReducer,
  user: UserReducer,
  deviceTypes: DeviceTypeReducer,
  services: ServicesReducer,
  devices: DevicesReducer,
  device: DeviceReducer,
  service: ServiceReducer,
});

export default RootReducer;
