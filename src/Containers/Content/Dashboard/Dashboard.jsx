import React, {useEffect} from 'react';
import {Spin, Typography} from 'antd';
import {useSelector} from "react-redux";
import * as actions from "../../../Store/Action/Getuser";
import {useDispatch} from "react-redux";

const { Text,Title } = Typography;

const Dashboard = ()=>{
  const dispatch = useDispatch()
  const getUserData = useSelector(state => state);
  useEffect(()=>{dispatch(actions.getUser())},[dispatch])

  if (getUserData.Getuser.loading){
    return (
      <div>
        <Spin size="large" />
      </div>
    );
  }
    return (
      <div>
        <Title level={1} >Welcome {getUserData.Getuser.currentUser} </Title>
        <Text>{getUserData.Getuser.currentUserEmail}</Text>
        <Text>{getUserData.Getuser.error}</Text>
      </div>
    );
  }

export default Dashboard;
