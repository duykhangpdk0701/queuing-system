export enum EUser {
  ADD_LOADING = "USER_ADD_LOADING",
  ADD_SUCCESS = "USER_ADD_SUCCESS",
  ADD_ERROR = "USER_ADD_ERROR",
  ADD_FAIL = "USER_ADD_FAIL",

  GET_LOADING = "USER_GET_LOADING",
  GET_SUCCESS = "USER_GET_SUCCESS",
  GET_ERROR = "USER_GET_ERROR",
}

export type UserType = {
  id: string;
  name: string;
  username: string;
  phoneNumber: string;
  email: string;
  role: any;
  isActive: boolean;
};

export type UserAddType = {
  name: string;
  username: string;
  phoneNumber: string;
  password: string;
  email: string;
  role: string;
  isActive: boolean;
};

export interface UserAddLoading {
  type: typeof EUser.ADD_LOADING;
}

export interface UserAddError {
  type: typeof EUser.ADD_ERROR;
  error: Error;
}

export interface UserAddSuccess {
  type: typeof EUser.ADD_SUCCESS;
  payload: UserType;
}

export interface UserAddFail {
  type: typeof EUser.ADD_FAIL;
  message: string;
}

export interface UserGetLoading {
  type: typeof EUser.GET_LOADING;
}

export interface UserGetError {
  type: typeof EUser.GET_ERROR;
  error: Error;
}

export interface UserGetSuccess {
  type: typeof EUser.GET_SUCCESS;
  payload: UserType[];
}

export type UserDispatchType =
  | UserAddLoading
  | UserAddError
  | UserAddSuccess
  | UserGetLoading
  | UserGetError
  | UserGetSuccess
  | UserAddFail;
