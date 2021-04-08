import React from "react";
import { Input, Form,Select } from 'antd';
import {UserOutlined ,LockOutlined,MailOutlined} from '@ant-design/icons';

const { Option } = Select;
const Inputs = (props)=>{

  const titleLayout = {
    wrapperCol: { offset: 10, span: 4 },
  };
  let inputElement = null;
  switch (props.elementType) {
    case("input"):
        inputElement = <Form.Item className={titleLayout}
                                  name="username"
                                  rules={[{required: true, message: 'Please input your username!'}]}
        >
          <Input prefix={<UserOutlined/>} placeholder="enter user name"/>
        </Form.Item>
      break;

    case ("password"):
        inputElement = <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!',min: 5, max: 7 }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="enter your password"/>
        </Form.Item>
      break;

    case ("email"):
        inputElement = <Form.Item
          name={['user', 'email']}
          rules={[{ type: 'email' }]}>
          <Input prefix={<MailOutlined />} placeholder="enter valid mail" />
        </Form.Item>
      break;

    case("select"):
        inputElement =<Form.Item>
          <Select placeholder="Select a option and change input text above"
                  className="select_dropdown"
                  value={props.value}
                  onChange={props.changed}
                  allowClear
                  >
            {props.elementConfig.option.map(option => (
              <Option key={option.value} value={option.value}>
                {option.displayValue}
              </Option>))}
          </Select>
        </Form.Item>
      break;

    default:
        inputElement = <Form.Item className={titleLayout}
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="enter user name"/>
      </Form.Item>
      break;
  }
  return(
    <div>
        {inputElement}
    </div>
);
}
export default Inputs;
