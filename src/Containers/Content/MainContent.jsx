import React from "react";
import { Layout } from 'antd';
import {Route,Switch} from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard";
import Bootcamp from "./Bootcamp/Bootcamp.jsx"
import Courses from "./Courses/Courses.jsx"
import "./MainContent.css"

const {  Content } = Layout;

const MainContent =()=>{

  return (
    <Layout className="content-layout">
      <Content className="content-layout-section">
        <Switch>
          <Route path="/MainLayout/Dashboard" component={Dashboard}/>
          <Route path="/MainLayout/Bootcamp" component={Bootcamp}/>
          <Route path="/MainLayout/Courses" component={Courses}/>
        </Switch>
      </Content>
    </Layout>
    );
}

export default MainContent;
