import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SiderContent from "../Layout/SiderContent";
import Home from "../Page/Home";

const { Sider, Content } = Layout;

const ContextRoute = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider>
        <SiderContent />
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ContextRoute;
