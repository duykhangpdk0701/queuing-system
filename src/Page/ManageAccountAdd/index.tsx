import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleGetAction } from "../../State/Actions/RoleActions";
import { RootStore } from "../../State/Store";
import ManageAccountAddLayout from "./Components/ManageAccountAddLayout";

const ManageAccountAdd = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootStore) => state.role);
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        await dispatch(roleGetAction());
      } catch (error) {
        console.log(error);
      }
    };

    fetchRoles();
  }, [dispatch]);

  const onFinish = (values: any) => {};

  return (
    <ManageAccountAddLayout
      roleLoading={state.loading}
      roleData={state.current}
    />
  );
};

export default ManageAccountAdd;
