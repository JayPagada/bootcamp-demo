import React from "react";
import { Layout, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import "./Navbar.css"
const { Header } = Layout;
const Navbar = ()=>{

    return (
      <Header className="fix-topbar">
        <div className="logo"> Dashboard </div>
        <Menu theme="dark" mode="horizontal" className="logout">
          <Menu.Item >
            <LogoutOutlined /> Logout
          </Menu.Item>
        </Menu>
      </Header>

    );
}

export default Navbar;
