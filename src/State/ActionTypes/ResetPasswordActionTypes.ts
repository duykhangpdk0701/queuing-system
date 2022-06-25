export enum EResetPassword {
  CONFIRM_EMAIL_SUCCESS = "CONFIRM_EMAIL_SUCCESS",
  CONFIRM_EMAIL_LOADING = "CONFIRM_EMAIL_LOADING",
  CONFIRM_EMAIL_FAIL = "CONFIRM_EMAIL_FAIL",
  CONFIRM_EMAIL_ERROR = "CONFIRM_EMAIL_ERROR",

  CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS",
  CHANGE_PASSWORD_LOADING = "CHANGE_PASSWORD_LOADING",
  CHANGE_PASSWORD_FAIL = "CHANGE_PASSWORD_FAIL",
  CHANGE_PASSWORD_ERROR = "CHANGE_PASSWORD_ERROR",
}

export interface IResetPasswordConfirmEmailSuccess {
  type: typeof EResetPassword.CONFIRM_EMAIL_SUCCESS;
  loading: boolean;
  step: number;
}

export interface IResetPasswordConfirmEmailLoading {
  type: typeof EResetPassword.CONFIRM_EMAIL_LOADING;
  loading: boolean;
  step: number;
}

export interface IResetPasswordConfirmEmailFail {
  type: typeof EResetPassword.CONFIRM_EMAIL_FAIL;
  loading: boolean;
  step: number;
  message: string;
}

export interface IResetPasswordConfirmEmailError {
  type: typeof EResetPassword.CONFIRM_EMAIL_ERROR;
  loading: boolean;
  step: number;
  error: Error;
}

export interface IResetPasswordChangePasswordSuccess {
  type: typeof EResetPassword.CHANGE_PASSWORD_ERROR;
  loading: boolean;
  step: number;
}

export interface IResetPasswordChangePasswordLoading {
  type: typeof EResetPassword.CHANGE_PASSWORD_LOADING;
  loading: boolean;
  step: number;
}

export interface IResetPasswordChangePasswordFail {
  type: typeof EResetPassword.CHANGE_PASSWORD_FAIL;
  loading: boolean;
  step: number;
  message: string;
}

export interface IResetPasswordChangePasswordError {
  type: typeof EResetPassword.CHANGE_PASSWORD_ERROR;
  loading: boolean;
  step: number;
  error: Error;
}

export type IConfirmEmailDispatchTypes =
  | IResetPasswordConfirmEmailSuccess
  | IResetPasswordConfirmEmailLoading
  | IResetPasswordConfirmEmailFail
  | IResetPasswordConfirmEmailError
  | IResetPasswordChangePasswordSuccess
  | IResetPasswordChangePasswordLoading
  | IResetPasswordChangePasswordFail
  | IResetPasswordChangePasswordError;
