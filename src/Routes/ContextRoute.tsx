import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderContent from "../Layout/HeaderContent";
import SiderContent from "../Layout/SiderContent";
import Home from "../Page/Home";
import Info from "../Page/Info";

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
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ContextRoute;
