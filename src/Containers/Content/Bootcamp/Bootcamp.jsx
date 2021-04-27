import React, {useEffect,useState} from 'react';
import { Drawer, Form, Button, Col, Row, Input,Popconfirm } from 'antd';
import {Spin, Table, Typography} from 'antd';
import { EditOutlined ,DeleteOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import * as bootcampActions from "../../../Store/Action/Bootcamp/Bootcamp";
import * as editBootcampActions from "../../../Store/Action/Bootcamp/EditBootcamp";
import * as deleteBootcampActions from "../../../Store/Action/Bootcamp/DeleteBootcamp";
import * as addBootcampActions from "../../../Store/Action/Bootcamp/AddBootcamp";

const Bootcamp = ()=>{
  let [state , setState] = useState(
    { visible: false ,
                id : null,
                filterData:null
              });
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
      render: (_, record) => (
        <span
          onClick={()=>showDrawer(record.id)}
        >
        <Typography.Link >
          <EditOutlined />
        </Typography.Link>
        </span>
      ),
    },
    {
      dataIndex: 'Delete',
      key: 'Delete',
      render: (_, record) => (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => {
            if (userRole.currentUserRole === "admin"){
              dispatch(deleteBootcampActions.deleteData(record.id))
              }else {

            }
          }}>
          <a><DeleteOutlined /></a>
        </Popconfirm>
      ),
    },
  ];
  const dispatch = useDispatch()
  const bootCamps = useSelector(state => state.getBootcamp);
  const userRole = useSelector(state => state.getUser);
  useEffect(()=>{dispatch(bootcampActions.getBootcamp())},[dispatch])
  if (bootCamps.loading){
    return (
      <div>
        <Spin size="large" />
      </div>
    );
  }

    const showDrawer = (id) => {
      const filterData = bootCamps.bootCamps.filter(bootCamps=>bootCamps.id === id ) ;
      setState({
        visible: true,
        id:id,
        filterData:filterData[0]
      });
    };

    const onClose = () => {
      setState({
        visible: false,
        id:null,
        filterData:null
      });
    };
    const editHandeler = (values) =>{
      if (state.id){
        dispatch(addBootcampActions.addData(values))
      }else {
        dispatch(editBootcampActions.editData(state.id,values))
      }
      setState({
        visible: false,
        id:null,
        filterData:null
      });
    }

      if (state.visible) {
        if(userRole.currentUserRole === "admin") {
        return (
          <div>
            <Button type="primary" onClick={showDrawer}>add BootCamps</Button>
            <Table columns={columns} dataSource={bootCamps.bootCamps}/>
            <>
              <Drawer
                title="Bootcamp"
                width={720}
                onClose={onClose}
                visible={state.visible}
                bodyStyle={{paddingBottom: 80}}
              >
                <Form layout="vertical" hideRequiredMark onFinish={editHandeler}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="name"
                        label="Name"
                        rules={[{required: true, message: 'Please enter user name'}]}
                        initialValue={state?.filterData?.name || ""}
                      >
                        <Input placeholder="Please enter user name"/>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="url"
                        label="Url"
                        rules={[{required: true, message: 'Please enter url'}]}
                        initialValue={state?.filterData?.website || ""}
                      >
                        <Input
                          style={{width: '100%'}}
                          addonBefore="http://"
                          addonAfter=".com"
                          placeholder="Please enter url"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="Phone"
                        label="Phone"
                        rules={[{required: true, message: 'Please enter your phone number'}]}
                        initialValue={state?.filterData?.phone || ""}
                      >
                        <Input placeholder="Please enter your phone number"/>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="Email"
                        label="Email"
                        rules={[{required: true, message: 'Please enter your Email'}]}
                        initialValue={state?.filterData?.email || ""}
                      >
                        <Input placeholder="Please enter your Email"/>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                          {
                            required: true,
                            message: 'please enter url description',
                          },
                        ]}
                      >
                        <Input.TextArea rows={4} placeholder="please enter url description"/>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item style={{
                        textAlign: 'right',
                      }}>
                        <Button onClick={onClose} style={{marginRight: 8}}>
                          Cancel
                        </Button>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item>
                        <Button htmlType="submit" type="primary">
                          Submit
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Drawer>
            </>
          </div>
        )
      } else {
          return (
            <div>
              <Button type="primary" onClick={showDrawer}>add BootCamps</Button>
              <Table columns={columns} dataSource={bootCamps.bootCamps}/>
              <>
                <Drawer
                  title="Bootcamp"
                  width={720}
                  onClose={onClose}
                  visible={state.visible}
                  bodyStyle={{paddingBottom: 80}}
                >
                  <Typography.Title style={{color:"red"}}>you can not edit or add Bootcamp Data</Typography.Title>
                </Drawer>
              </>
            </div>
          )
        }
    }

  return (

    <div>
      <Button type="primary" onClick={showDrawer}>add BootCamps</Button>
      <Table columns={columns} dataSource={bootCamps.bootCamps} />
    </div>

  );
}

export default Bootcamp;
