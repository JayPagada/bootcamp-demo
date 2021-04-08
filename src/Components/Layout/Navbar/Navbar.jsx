import React from "react";
import { Layout, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import "./Navbar.css"
import {NavLink} from "react-router-dom";
import * as actions from "../../../Store/Action/Login";
import {connect} from "react-redux";
const { Header } = Layout;
const Navbar = (props)=>{

    return (
      <Header className="fix-topbar">
        <div className="logo"> Dashboard </div>
        <Menu theme="dark" mode="horizontal" className="logout">
          <NavLink to="/Login" >
          <Menu.Item onClick={props.onLogout}>
            <LogoutOutlined /> Logout
          </Menu.Item>
            </NavLink>
        </Menu>
      </Header>
    );
}
const mapDispatchToProps = dispatch =>{
  return {
    onLogout : () =>dispatch(actions.logout())
  }
};
export default connect(null,mapDispatchToProps)(Navbar);

