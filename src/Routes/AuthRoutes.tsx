import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgetPassword from "../Page/Auth/ForgetPassword";
import Login from "../Page/Auth/Login";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  );
};

export default AuthRoutes;
