import React, {useEffect} from 'react';
import {Spin, Table} from 'antd';
import {useSelector} from "react-redux";
import * as actions from "../../../Store/Action/Courses";
import {useDispatch} from "react-redux";

const columns = [
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
  }
  ]
const Courses = ()=>{
  const dispatch = useDispatch()
  const getCourses = useSelector(state => state.getCourses);
  const getbootCampId = useSelector(state => state.getBootcamp);
  const idData = getbootCampId.bootCamps.map(id=>id.id)
  useEffect(()=>{dispatch(actions.getCourseData(idData))},[dispatch])
  if (getCourses.loading){
    return (
      <div>
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div >
      <Table columns={columns} dataSource={getCourses.Courses} />
    </div>
  );
}

export default Courses;
