import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderContent from "../Layout/HeaderContent";
import SiderContent from "../Layout/SiderContent";
import DeviceDetail from "../Page/DeviceDetail";
import Devices from "../Page/Devices";
import DeviceUpdate from "../Page/DeviceUpdate";
import History from "../Page/History";
import Home from "../Page/Home";
import Info from "../Page/Info";
import ManageAccount from "../Page/ManageAccount/Index";
import ManageRole from "../Page/ManageRole";

const { Sider, Content, Header } = Layout;

const ContextRoute = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width={266}>
        <SiderContent />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "transparent" }}>
          <HeaderContent />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/devices">
              <Route index element={<Devices />} />
              <Route path="update/:id" element={<DeviceUpdate />} />
              <Route path=":id" element={<DeviceDetail />} />
            </Route>
            <Route path="/setting">
              <Route path="accounts" element={<ManageAccount />} />
              <Route path="manage-roles" element={<ManageRole />} />
              <Route path="user-history" element={<History />} />
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ContextRoute;
