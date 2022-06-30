export enum EService {
  GET_LOADING = "GET_LOADING",
  GET_SUCCESS = "GET_SUCCESS",
  GET_ERROR = "GET_ERROR",

  ADD_LOADING = "ADD_LOADING",
  ADD_SUCCESS = "ADD_SUCCESS",
  ADD_ERROR = "ADD_ERROR",
  ADD_FAIL = "ADD_FAIL",
}

export type ServiceType = {
  id: string;
  name: string;
  description: string;
  isReset: boolean;
  surfix: boolean;
  prefix: boolean;
  increase: { from: number; to: number };
};

export type ServiceAddType = {
  id: string;
  name: string;
  description: string;
  isReset: boolean;
  surfix: boolean;
  prefix: boolean;
  increase: { from: number; to: number };
};

export interface ServiceGetLoading {
  type: typeof EService.GET_LOADING;
}

export interface ServiceGetError {
  type: typeof EService.GET_ERROR;
  error: Error;
}

export interface ServiceGetSuccess {
  type: typeof EService.GET_SUCCESS;
  payload: ServiceType[];
}

export interface ServiceAddLoading {
  type: typeof EService.ADD_LOADING;
}

export interface ServiceAddError {
  type: typeof EService.ADD_ERROR;
  error: Error;
}

export interface ServiceAddSuccess {
  type: typeof EService.ADD_SUCCESS;
  payload: ServiceType;
}

export type ServiceDispatchType =
  | ServiceGetLoading
  | ServiceGetError
  | ServiceGetSuccess
  | ServiceAddLoading
  | ServiceAddError
  | ServiceAddSuccess;
