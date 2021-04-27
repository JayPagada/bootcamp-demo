import React from "react";
import { Button,Form } from 'antd';
import "./Button.css"
const  Buttons = (props)=>{
return(
  <Form.Item>
    <Button type="primary" htmlType={props.htmlType} className={props.className} loading={props.loading}>
      {props.children}
    </Button>
  </Form.Item>
);
}
export default Buttons;
