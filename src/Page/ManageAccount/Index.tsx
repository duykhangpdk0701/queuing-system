import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleGetAction } from "../../State/Actions/RolesActions";
import { userGetAction } from "../../State/Actions/UsersActions";
import { RootStore } from "../../State/Store";
import ManageAccountLayout from "./Components/ManageAccountLayout";

const ManageAccount = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootStore) => state.users);
  const roleState = useSelector((state: RootStore) => state.roles);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await dispatch(userGetAction());
        await dispatch(roleGetAction());
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [dispatch]);

  return (
    <ManageAccountLayout
      loading={state.loading}
      data={state.current}
      rolesLoading={roleState.loading}
      rolesData={roleState.current}
    />
  );
};

export default ManageAccount;
