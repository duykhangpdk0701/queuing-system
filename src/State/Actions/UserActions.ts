import { collection, getDoc, getDocs } from "firebase/firestore";
import { Dispatch } from "react";
import {
  EUser,
  UserDispatchType,
  UserType,
} from "../ActionTypes/UserActionTypes";
import { db } from "../../Config/firebase";

export const userGetAction =
  () => async (dispatch: Dispatch<UserDispatchType>) => {
    try {
      dispatch({
        type: EUser.GET_LOADING,
      });

      const users: UserType[] = [];

      const queryRoles = await getDocs(collection(db, "users"));
      await queryRoles.forEach(async (value) => {
        const temp = value.data() as UserType;
        const role = await getDoc(temp.role);
        const roleData = await role.data();
        const id = value.id;

        users.push({
          ...temp,
          id,
          role: roleData,
        });
      });

      users.reverse();
      setTimeout(() => {
        dispatch({
          type: EUser.GET_SUCCESS,
          payload: users,
        });
      }, 500);
    } catch (error) {
      dispatch({
        type: EUser.GET_ERROR,
        error: error as Error,
      });
    }
  };
