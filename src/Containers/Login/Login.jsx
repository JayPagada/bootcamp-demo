import React, {useState,useReducer} from "react";
import Inputs from "../../Components/UI/Input/Inputs";
import {Form, Typography} from 'antd';
import Buttons from "../../Components/UI/Button/Buttons";
import "./Login.css"
import * as actions from "../../Store/Action/Login.jsx";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import reducer from "../../Store/Reducer/Login";


const Login = (props) => {
  const dispatch = useDispatch()
  const [loginState] = useState({
    email: {
      elementType: "email",
    },
    password: {
      elementType: "password",
    }
  });

  const [login, dispach] = useReducer(reducer)

  const {Title} = Typography;

  const tailLayout = {
    wrapperCol: {offset: 9, span: 6},
  };

  const titleLayout = {
    wrapperCol: {offset: 10, span: 4},
  };

  const inputChangeHandeler = (values) => {
    dispatch(actions.auth(values.email,values.password))
    props.history.push('/MainLayout/Dashboard')
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
      <Buttons>LogIn</Buttons>
      <NavLink to="/Register"> <Buttons>SignIn</Buttons> </NavLink>

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
