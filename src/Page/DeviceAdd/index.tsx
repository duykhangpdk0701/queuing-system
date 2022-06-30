import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deviceTypeGetAction } from "../../State/Actions/DeviceTypeActions";
import { RootStore } from "../../State/Store";
import DeviceAddLayout from "./Components/DeviceAddLayout";

const DeviceAdd = () => {
  const dispatch = useDispatch();
  const deviceTypeState = useSelector((state: RootStore) => state.deviceType);
  useEffect(() => {
    const fecthDeviceType = () => {
      try {
        dispatch(deviceTypeGetAction());
      } catch (error) {
        console.log(error);
      }
    };

    fecthDeviceType();
  }, [dispatch]);

  return (
    <DeviceAddLayout
      deviceTypeloading={deviceTypeState.loading}
      deviceTypeData={deviceTypeState.current}
    />
  );
};

export default DeviceAdd;
