import React, {useEffect} from 'react';
import {Spin, Typography} from 'antd';
import {useSelector} from "react-redux";
import * as actions from "../../../Store/Action/Getuser";
import {useDispatch} from "react-redux";

const { Text,Title } = Typography;

const Dashboard = ()=>{
  const dispatch = useDispatch()
  const getUserData = useSelector(state => state.getUser);
  useEffect(()=>{dispatch(actions.getUser())},[dispatch])

  if (getUserData.loading){
    return (
      <div>
        <Spin size="large" />
      </div>
    );
  }
    return (
      <div>
        <Title level={1} >Welcome {getUserData.currentUser} </Title>
        <Text>{getUserData.currentUserEmail}</Text>
        <Text>{getUserData.error}</Text>
      </div>
    );
  }

export default Dashboard;
