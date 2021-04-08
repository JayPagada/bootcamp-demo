import React,{useState} from "react";
import { Layout, Menu  } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  UserOutlined,
  DatabaseOutlined,
  BookOutlined, } from '@ant-design/icons';
import "./Sidebar.css"
const { Sider } = Layout;
const Navbar = ()=>{
   const [navItem]= useState([
     {value:"Dashboard",
      icon:<UserOutlined/>
     },
     {
       value:"Bootcamp",
      icon:<DatabaseOutlined />
     },
     {
       value:"Courses",
      icon: <BookOutlined />
     },
   ])
  return (
    <Sider width={250} style={{marginTop:"60px"}} className="site-layout-background fix-sider" >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['Dashboard']} defaultOpenKeys={['Dashboard']}>
        {navItem.map((item)=>(
          <Menu.Item key={item.value} icon={item.icon}>
            <NavLink to="/Dashboard"> {item.value}</NavLink>
          </Menu.Item>
          )
        )
        }
      </Menu>
    </Sider>

  );
}

export default Navbar;