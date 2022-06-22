import React from "react";
import AuthWrapper from "../Components/AuthWrapper";
import logo from "../../../Assets/logo.svg";
import ForgetPasswordForm from "./ForgetPasswordForm";

const ForgetPassword = () => {
  return <AuthWrapper illustration={logo} form={<ForgetPasswordForm />} />;
};

export default ForgetPassword;
