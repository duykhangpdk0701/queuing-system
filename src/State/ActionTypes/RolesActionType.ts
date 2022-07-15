export enum ERole {
  ADD_LOADING = "ROLE_ADD_LOADING",
  ADD_SUCCESS = "ROLE_ADD_SUCCESS",
  ADD_ERROR = "ROLE_ADD_ERROR",

  GET_LOADING = "ROLE_GET_LOADING",
  GET_SUCCESS = "ROLE_GET_SUCCESS",
  GET_ERROR = "ROLE_GET_ERROR",
}

export type RoleType = {
  id: string;
  name: string;
  description: string;
  authority: string[];
  amountOfUser: number;
};

export type RoleAddType = {
  name: string;
  description: string;
  authority: string[];
};

export interface IRoleAddLoading {
  type: typeof ERole.ADD_LOADING;
}

export interface IRoleAddError {
  type: typeof ERole.ADD_ERROR;
  error: Error;
}

export interface IRoleAddSuccess {
  type: typeof ERole.ADD_SUCCESS;
  payload: RoleType;
}

export interface IRoleGetLoading {
  type: typeof ERole.GET_LOADING;
}

export interface IRoleGetError {
  type: typeof ERole.GET_ERROR;
  error: Error;
}

export interface IRoleGetSuccess {
  type: typeof ERole.GET_SUCCESS;
  payload: RoleType[];
}

export type RoleDispatchType =
  | IRoleAddLoading
  | IRoleAddError
  | IRoleAddSuccess
  | IRoleGetLoading
  | IRoleGetError
  | IRoleGetSuccess;
