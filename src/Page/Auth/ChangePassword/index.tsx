import React from "react";
import AuthWrapper from "../Components/AuthWrapper";
import illustrationHelp from "../../../Assets/illustrationHelp.svg";
import ConfirmEmail from "./ConfirmEmail";

export type valuesSubmitConfirmEmailType = {
  email: string;
};

export type valuesSubmitResetEmailType = {
  password: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const onFinishConfirrmEmail = (values: valuesSubmitConfirmEmailType) => {
    console.log(values);
  };

  const onFinishResetPassword = (values: valuesSubmitResetEmailType) => {
    console.log(values);
  };

  return (
    <AuthWrapper
      illustration={illustrationHelp}
      form={<ConfirmEmail onFinish={onFinishConfirrmEmail} />}
    />
  );
};

export default ChangePassword;
