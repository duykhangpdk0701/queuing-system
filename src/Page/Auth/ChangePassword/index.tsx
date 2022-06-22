import React from "react";
import AuthWrapper from "../Components/AuthWrapper";
import logo from "../../../Assets/logo.svg";
import ChangePasswordFom from "./ChangePasswordFom";

const index = () => {
  return <AuthWrapper illustration={logo} form={<ChangePasswordFom />} />;
};

export default index;
