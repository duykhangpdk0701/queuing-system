export enum ERole {
  ADD_LOADING = "ADD_LOADING",
  ADD_SUCCESS = "ADD_SUCCESS",
  ADD_ERROR = "ADD_ERROR",
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

export interface RoleAddLoading {
  type: typeof ERole.ADD_LOADING;
}

export interface RoleAddError {
  type: typeof ERole.ADD_ERROR;
  error: Error;
}

export interface RoleAddSuccess {
  type: typeof ERole.ADD_SUCCESS;
  payload: RoleType;
}

export type RoleDispatchType = RoleAddLoading | RoleAddError | RoleAddSuccess;
