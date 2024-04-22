import React, { useState } from "react";
import { Layout } from "antd";
import "./App.scss";
import Head from "./components/Head";
import SideBar from "./components/SideBar";

const { Header, Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh", width: "100vw" }}>
      <Header className="header" style={{ padding: "0px" }}>
        <Head collapsed={collapsed} setCollapsed={setCollapsed} />
      </Header>
      <Layout>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          className="sideBar"
          trigger=""
        >
          {" "}
          <SideBar />{" "}
        </Sider>
        <Content> {/* Add your Content here */} </Content>
      </Layout>
    </Layout>
  );
}

export default App;
