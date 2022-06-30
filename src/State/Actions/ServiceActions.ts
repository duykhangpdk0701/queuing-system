import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { Dispatch } from "react";
import { db } from "../../Config/firebase";
import {
  EService,
  ServiceAddType,
  ServiceDispatchType,
  ServiceType,
} from "../ActionTypes/ServiceActionTypes";

export const serviceAddAction =
  (values: ServiceAddType) =>
  async (dispatch: Dispatch<ServiceDispatchType>) => {
    console.log(values);
    try {
      dispatch({
        type: EService.ADD_LOADING,
      });

      const isExistServiceRef = doc(db, "services", values.id);
      const isExistServiceSnap = await getDoc(isExistServiceRef);
      if (isExistServiceSnap.exists()) {
        dispatch({
          type: EService.ADD_ERROR,
          error: new Error("Mã dịch đã tồn tại trong hệ thống"),
        });
        return Promise.reject("Mã dịch đã tồn tại trong hệ thống");
      }

      const newService = doc(db, "services", values.id);
      const inputService = {
        name: values.name,
        prefix: values.prefix,
        surfix: values.surfix,
        description: values.description,
        increase: values.increase,
        isReset: values.isReset,
      };

      await setDoc(newService, inputService);

      const roleRef = doc(db, "roles", newService.id);
      const roleSnap = await getDoc(roleRef);

      dispatch({
        type: EService.ADD_SUCCESS,
        payload: { id: roleSnap.id, ...roleSnap.data() } as ServiceType,
      });
    } catch (error) {
      dispatch({
        type: EService.ADD_ERROR,
        error: error as Error,
      });
    }
  };
