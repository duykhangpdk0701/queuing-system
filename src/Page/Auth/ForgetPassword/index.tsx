import React from "react";
import AuthWrapper from "../Components/AuthWrapper";
import illustrationHelp from "../../../Assets/illustrationHelp.svg";
import ForgetPasswordForm from "./ForgetPasswordForm";

const ForgetPassword = () => {
  return (
    <AuthWrapper
      illustration={illustrationHelp}
      form={<ForgetPasswordForm />}
    />
  );
};

export default ForgetPassword;
