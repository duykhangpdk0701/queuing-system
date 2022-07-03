import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { Dispatch } from "react";
import {
  EUser,
  UserAddType,
  UserDispatchType,
  UserType,
} from "../ActionTypes/UsersActionTypes";
import { db } from "../../Config/firebase";
import { RoleType } from "../ActionTypes/RolesActionType";

export const userGetAction =
  () => async (dispatch: Dispatch<UserDispatchType>) => {
    try {
      dispatch({
        type: EUser.GET_LOADING,
      });

      const users: UserType[] = [];

      const queryRoles = await getDocs(collection(db, "users"));
      queryRoles.forEach(async (value) => {
        const temp = value.data() as UserType;
        const role = await getDoc(temp.role);
        const roleData = (await role.data()) as RoleType;
        const id = value.id;

        users.push({
          ...temp,
          id,
          role: { ...roleData, id: role.id },
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

export const userAddAction =
  (values: UserAddType) => async (dispatch: Dispatch<UserDispatchType>) => {
    try {
      dispatch({
        type: EUser.ADD_LOADING,
      });

      const isExistUserUsernameQ = query(
        collection(db, "users"),
        where("username", "==", values.username)
      );
      const isExistUserUsernameSnap = await getDocs(isExistUserUsernameQ);

      isExistUserUsernameSnap.forEach((value) => {
        console.log(value.data());
      });

      if (!isExistUserUsernameSnap.empty) {
        dispatch({
          type: EUser.ADD_ERROR,
          error: new Error("Tên đăng nhập đã tồn tại trong hệ thống"),
        });
        return Promise.reject("Tên đăng nhập đã tồn tại trong hệ thống");
      }

      const newUser = doc(collection(db, "users"));
      await setDoc(newUser, {
        ...values,
        role: doc(db, `/roles/${values.role}`),
      });

      const userRef = doc(db, "roles", newUser.id);

      const userSnap = await getDoc(userRef);

      dispatch({
        type: EUser.ADD_SUCCESS,
        payload: { id: userSnap.id, ...userSnap.data() } as UserType,
      });
    } catch (error) {
      dispatch({
        type: EUser.ADD_ERROR,
        error: error as Error,
      });
    }
  };
