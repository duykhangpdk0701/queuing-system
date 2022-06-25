import React from "react";
import { Route, Routes } from "react-router-dom";
import ChangePassword from "../Page/Auth/ChangePassword";
import ForgetPassword from "../Page/Auth/ForgetPassword";
import Login from "../Page/Auth/Login";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/change-password" element={<ChangePassword />} />
    </Routes>
  );
};

export default AuthRoutes;
