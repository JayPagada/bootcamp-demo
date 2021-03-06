import React, {useState} from "react";
import Inputs from "../../Components/UI/Input/Inputs";
import {Form, Typography} from 'antd';
import Buttons from "../../Components/UI/Button/Buttons";
import "./Login.css"
import * as actions from "../../Store/Action/Login.jsx";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch()
  const checkError = useSelector(state => state.getLogin);
  const [loginState] = useState({
    email: {
      elementType: "email",
    },
    password: {
      elementType: "password",
    }
  });

  const {Title,Text} = Typography;

  const tailLayout = {
    wrapperCol: {offset: 9, span: 6},
  };

  const titleLayout = {
    wrapperCol: {offset: 10, span: 4},
  };

  const inputChangeHandeler = (values) => {
    dispatch(actions.auth(values.email,values.password,props))

  }
  const formElementArray = [];
  for (let key in loginState) {
    formElementArray.push({id: key, config: loginState[key]})
  }
  let form = (
    <Form
      {...tailLayout}
      onFinish={inputChangeHandeler}
      name="normal_login"
      className="login-form"
    >
      <Form.Item {...titleLayout}>
        <Title level={3} className="title">
          Dashboard Login
        </Title>
      </Form.Item>
      {formElementArray.map(formElement => (
        <Inputs
          key={formElement.id}
          elementType={formElement.config.elementType}
          shouldValidate={formElement.config.validation}
        />
      ))}
      <Form.Item>
      {(checkError?.error)&&(
      <Text className="error">  {checkError?.error} </Text>
      )}
      </Form.Item>
      <Buttons htmlType="submit" className="login-form-button" loading={checkError.loading} >LogIn</Buttons >
      <NavLink to="/Register"> <Buttons className="login-form-button">SignIn</Buttons> </NavLink>
    </Form>

  );

  return (
    <div className="login-container">
      <div className="site-card-border-less-wrapper">
        {form}
      </div>
    </div>

  );
}

export default Login;
