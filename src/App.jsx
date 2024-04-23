import React, { useState } from "react";
import { Layout } from "antd";
import "./App.css";
import Head from "./components/Head";
import SideBar from "./components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Customer from "./components/Customer";
import {
  faTachometerAlt,
  faWrench,
  faFileInvoice,
  faUserFriends,
  faBoxOpen,
  faClipboardCheck,
  faTools,
  faComments,
  faUsers,
  faLock,
  faUserShield,
  faEnvelope,
  faFilePdf,
  faSms,
  faPalette,
  faCreditCard,
  faDatabase,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const { Header, Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems = [
    { title: "Dashboard", icon: <FontAwesomeIcon icon={faTachometerAlt} /> },
    { title: "Service Jobs", icon: <FontAwesomeIcon icon={faWrench} /> },
    { title: "Invoices", icon: <FontAwesomeIcon icon={faFileInvoice} /> },
    { title: "Customers", icon: <FontAwesomeIcon icon={faUserFriends} /> },
    { title: "Products", icon: <FontAwesomeIcon icon={faBoxOpen} /> },
    {
      title: "Offered Services",
      icon: <FontAwesomeIcon icon={faClipboardCheck} />,
    },
    { title: "Parts", icon: <FontAwesomeIcon icon={faTools} /> },
    { title: "Enquiries", icon: <FontAwesomeIcon icon={faComments} /> },
    { title: "Users", icon: <FontAwesomeIcon icon={faUsers} /> },
    { title: "Permissions", icon: <FontAwesomeIcon icon={faLock} /> },
    { title: "Roles", icon: <FontAwesomeIcon icon={faUserShield} /> },
    { title: "Email Templates", icon: <FontAwesomeIcon icon={faEnvelope} /> },
    { title: "PDF Templates", icon: <FontAwesomeIcon icon={faFilePdf} /> },
    { title: "SMS Templates", icon: <FontAwesomeIcon icon={faSms} /> },
    { title: "Theming", icon: <FontAwesomeIcon icon={faPalette} /> },
    {
      title: "Payment Gateways",
      icon: <FontAwesomeIcon icon={faCreditCard} />,
    },
    { title: "Backup", icon: <FontAwesomeIcon icon={faDatabase} /> },
    { title: "Configurations", icon: <FontAwesomeIcon icon={faCogs} /> },
    { title: "Settings", icon: <FontAwesomeIcon icon={faCogs} /> },
  ];

  return (
    <Layout style={{ height: "auto", width: "99vw" }}>
      <Header className="header" style={{ padding: "0px" }} theme="toolkit">
        <Head
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          imageUrl={
            "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
      </Header>
      <Layout>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          className="sideBar"
          trigger=""
        >
          <SideBar items={sidebarItems} />
        </Sider>
        <Content className="content-Section">
          {" "}
          <Customer />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
