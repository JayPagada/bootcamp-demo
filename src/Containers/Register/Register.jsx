import React,{useState} from "react";
import Inputs from "../../Components/UI/Input/Inputs";
import { Form,Typography } from 'antd';
import Buttons from "../../Components/UI/Button/Buttons";
import * as actions from "../../Store/Action/Login.jsx";
import {connect, useDispatch} from "react-redux";
import "../Login/Login.css"
const Register=(props) => {
  const [Register ] = useState({
    name:{
      elementType:"input",
    },
    email:{
      elementType:"email",
      validation:{
        required:true
      },
    },
    password:{
      elementType:"password",
      validation:{
        required:true
      },
    },
    role: {
      elementType: "select",
      elementConfig: {
        option: [
          {value: "user", displayValue: "user"},
          {value: "admin", displayValue: "admin"}
        ]
      }
    }
  });
  const { Title } = Typography;
  const dispatch = useDispatch()
  const tailLayout = {
    wrapperCol: { offset: 9, span: 6 },
  };

  const titleLayout = {
    wrapperCol: { offset: 10, span: 4 },
  };
  const onFinish = (values) => {
    dispatch(actions.REGISTER(values.username,values.email,values.password,values.role));
    props.history.push('/MainLayout/Dashboard')
  };

  const formElementArray = [];
  for(let key in Register){
    formElementArray.push({id:key, config:Register[key]})
  }
  let form = (
    <Form
      {...tailLayout}
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
    >
      <Form.Item {...titleLayout}>
        <Title level={3} className="title">
          Dashboard Register
        </Title>
      </Form.Item>
      {formElementArray.map(formElement =>(
        <Inputs
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          shouldValidate={formElement.config.validation}
        />
      ))}
      <Buttons>Register Now</Buttons>
    </Form>
  );
  return(
    <div className="login-container">
      <div className="site-card-border-less-wrapper">
        {form}
      </div>
    </div>

  );
}

  export default Register;
