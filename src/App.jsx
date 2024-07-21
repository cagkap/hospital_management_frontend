import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import PatientCriteria from "./components/shared/patient/query/PatientCriteria";
import PatientQuery from "./components/shared/patient/query/PatientQuery";
import "./styles.css";
import { Layout } from "antd";
import { useState } from "react";
import CustomHeader from "./components/shared/CustomHeader";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout className="h-screen">
        <Sider
          class="sticky"
          theme="light"
          collapsible
          collapsed={collapsed}
          className="top-0 left-0 bottom-0 h-screen "
        >
          <Navbar></Navbar>
        </Sider>
        <Layout>
          <Header className="bg-white h-16">
            <CustomHeader></CustomHeader>
          </Header>
          <div className="m-2">
            <PatientQuery></PatientQuery>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
