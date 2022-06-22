import React from "react";
import AuthWrapper from "../Components/AuthWrapper";
import logo from "../../../Assets/logo.svg";
import LoginForm from "../Login/LoginForm";

const Login = () => {
  return <AuthWrapper illustration={logo} form={<LoginForm />} />;
};

export default Login;
