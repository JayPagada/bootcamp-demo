import React from "react";
import { Layout, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import "./Navbar.css"
import {NavLink} from "react-router-dom";
import * as actions from "../../../Store/Action/Login";
import { useDispatch} from "react-redux";
const { Header } = Layout;
const Navbar = (props)=>{
  const dispatch = useDispatch()
    return (
      <Header className="fix-topbar">
        <div className="logo"> Dashboard </div>
        <Menu theme="dark" mode="horizontal" className="logout">
          <NavLink to="/Login" >
          <Menu.Item onClick={()=>{dispatch(actions.logout())}}>
            <LogoutOutlined /> Logout
          </Menu.Item>
            </NavLink>
        </Menu>
      </Header>
    );
}

export default Navbar;

