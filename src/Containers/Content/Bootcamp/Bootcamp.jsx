import React, {useEffect} from 'react';
import {Spin, Table, Popconfirm, Typography} from 'antd';
import { EditOutlined ,DeleteOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../Store/Action/Bootcamp";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
    render: (text) => (
      <a href={text} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    dataIndex: 'Edit',
    key: 'Edit',
    render: () => (
      <Typography.Link >
        <EditOutlined />
      </Typography.Link>
    ),
  },
  {
    dataIndex: 'Delete',
    key: 'Delete',
    render: () => (
      <Typography.Link >
      <Popconfirm title="Sure to delete?" >
        <DeleteOutlined />
      </Popconfirm>
      </Typography.Link>
    ),
  },
];

const Bootcamp = ()=>{
  const dispatch = useDispatch()
  const bootCamps = useSelector(state => state.Bootcamp);
  useEffect(()=>{dispatch(actions.getBootcamp())},[dispatch])

  if (bootCamps.loading){
    return (
      <div>
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div>
      <Table columns={columns} dataSource={bootCamps.bootCamps} />
    </div>
  );
}

export default Bootcamp;
