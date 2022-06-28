import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { Dispatch } from "react";
import { db } from "../../Config/firebase";
import {
  ERole,
  RoleAddType,
  RoleDispatchType,
  RoleType,
} from "../ActionTypes/RoleActionType";

export const roleAddAction =
  (values: RoleAddType) => async (dispatch: Dispatch<RoleDispatchType>) => {
    try {
      dispatch({
        type: ERole.ADD_LOADING,
      });
      const newRole = doc(collection(db, "roles"));
      await setDoc(newRole, { ...values, amountOfUser: 6 });

      const roleRef = doc(db, "roles", newRole.id);
      const roleSnap = await getDoc(roleRef);
      if (roleSnap.exists()) {
        dispatch({
          type: ERole.ADD_SUCCESS,
          payload: { id: roleSnap.id, ...roleSnap.data() } as RoleType,
        });
      }
      Promise.reject("adding was not success!");
    } catch (error) {
      dispatch({
        type: ERole.ADD_ERROR,
        error: error as Error,
      });
    }
  };
