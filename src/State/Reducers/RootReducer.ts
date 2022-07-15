import { combineReducers } from "redux";
import DashboardReducer from "./DashboardReducers";
import DeviceReducer from "./DeviceReducer";
import DevicesReducer from "./DevicesReducers";
import DeviceTypeReducer from "./DeviceTypesReducers";
import HistoryReducer from "./HistoryReducers";
import LoginReducer from "./LoginReducer";
import ProviderReducers from "./ProviderReducers";
import ProvidersReducers from "./ProvidersReducers";
import ReportsReducers from "./ReportsReducers";
import ResetPasswordReducer from "./ResetPasswordReducers";
import RoleReducer from "./RolesReducer";
import ServiceReducer from "./ServiceReducers";
import ServicesReducer from "./ServicesReducers";
import SourceProviderReducer from "./SourceProviderReducers";
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
  provider: ProviderReducers,
  providers: ProvidersReducers,
  reports: ReportsReducers,
  dashboard: DashboardReducer,
  sourceProvider: SourceProviderReducer,
  history: HistoryReducer,
});

export default RootReducer;
