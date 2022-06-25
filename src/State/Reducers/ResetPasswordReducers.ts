import {
  EResetPassword,
  IConfirmEmailDispatchTypes,
} from "../ActionTypes/ResetPasswordActionTypes";

export interface defaultState {
  loading: boolean;
  step: number;
  message?: string;
  error?: Error;
}

const initialState: defaultState = {
  loading: false,
  step: 1,
};

const ResetPasswordReducer = (
  state: defaultState = initialState,
  action: IConfirmEmailDispatchTypes
): defaultState => {
  switch (action.type) {
    case EResetPassword.CONFIRM_EMAIL_SUCCESS:
      return {
        loading: false,
        step: 1,
      };

    default:
      return state;
  }
};

export default ResetPasswordReducer;
