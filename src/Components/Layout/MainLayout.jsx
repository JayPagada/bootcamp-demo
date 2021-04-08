import React from 'react';
import Navbar from "./Navbar/Navbar";
import { Layout } from 'antd';
import Sidebar from "./Sidebar/Sidebar.jsx"
import MainContent from "../../Containers/Content/MainContent";
const MainLayout =()=> {

    return (
      <Layout>
        <Navbar/>
        <Sidebar/>
        <MainContent/>
      </Layout>
    );
}

export default MainLayout;
