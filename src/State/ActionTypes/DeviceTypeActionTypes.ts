export enum EDeviceType {
  GET_LOADING = "GET_LOADING",
  GET_SUCCESS = "GET_SUCCESS",
  GET_ERROR = "GET_ERROR",
}

export type DeviceTypeType = {
  id: string;
  name: string;
};

export interface DeviceTypeGetLoading {
  type: typeof EDeviceType.GET_LOADING;
}

export interface DeviceTypeGetError {
  type: typeof EDeviceType.GET_ERROR;
  error: Error;
}

export interface DeviceTypeGetSuccess {
  type: typeof EDeviceType.GET_SUCCESS;
  payload: DeviceTypeType[];
}

export type DeviceTypeDispatchType =
  | DeviceTypeGetLoading
  | DeviceTypeGetError
  | DeviceTypeGetSuccess;
