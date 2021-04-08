import React,{useState} from "react";
import Inputs from "../../Components/UI/Input/Inputs";
import { Form,Typography } from 'antd';
import Buttons from "../../Components/UI/Button/Buttons";
import "../Login/Login.css"
const Register=() => {
  const [login , setlogin] = useState({
    name:{
      elementType:"input",
      value:"",
    },
    email:{
      elementType:"email",
      value:"",
      validation:{
        required:true
      },
    },
    password:{
      elementType:"password",
      value:"",
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
      },
      value: ""
    }
  });
  const { Title } = Typography;

  const tailLayout = {
    wrapperCol: { offset: 9, span: 6 },
  };

  const titleLayout = {
    wrapperCol: { offset: 10, span: 4 },
  };

  const formElementArray = [];
  for(let key in login){
    formElementArray.push({id:key, config:login[key]})
  }
  let form = (
    <Form
      {...tailLayout}
      name="normal_login"
      className="login-form"
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
          // changed={(event)=>this.inputChangeHandeler(event,formElement.id)}
        />
      ))}
      <Buttons>LogIn</Buttons>
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