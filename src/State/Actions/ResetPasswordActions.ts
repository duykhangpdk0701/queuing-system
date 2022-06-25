import { collection, getDocs, query, where } from "firebase/firestore";
import { Dispatch } from "react";
import { db } from "../../Config/firebase";
import {
  EResetPassword,
  IConfirmEmailDispatchTypes,
} from "../ActionTypes/ResetPasswordActionTypes";

export const confirmEmailActions =
  (email: string) => async (dispatch: Dispatch<IConfirmEmailDispatchTypes>) => {
    dispatch({
      type: EResetPassword.CONFIRM_EMAIL_LOADING,
      step: 1,
      loading: true,
    });

    try {
      let userId = undefined;

      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        userId = doc.data().email;
      });

      if (userId) {
        dispatch({
          type: EResetPassword.CONFIRM_EMAIL_FAIL,
          loading: false,
          step: 1,
          message: "Email không tồn tại",
        });
        return;
      }

      dispatch({
        type: EResetPassword.CONFIRM_EMAIL_SUCCESS,
        loading: false,
        step: 2,
      });
    } catch (error) {
      dispatch({
        type: EResetPassword.CONFIRM_EMAIL_ERROR,
        loading: false,
        step: 1,
        error: error as Error,
      });
    }
  };

export const changePasswordActions =
  (password: string, confirmPassword: string) =>
  async (dispatch: Dispatch<IConfirmEmailDispatchTypes>) => {
    dispatch({
      type: EResetPassword.CHANGE_PASSWORD_LOADING,
      step: 2,
      loading: true,
    });

    if (password !== confirmPassword) {
      dispatch({
        type: EResetPassword.CHANGE_PASSWORD_FAIL,
        loading: false,
        step: 2,
        message: "Mật khẩu và xác nhận mật khẩu không giống nhau",
      });
    }

    try {
    } catch (error) {
      dispatch({
        type: EResetPassword.CHANGE_PASSWORD_ERROR,
        loading: false,
        step: 2,
        error: error as Error,
      });
    }
  };
