import React,{useEffect} from "react";
import './App.css';
import Auxiliary from "./hoc/Auxiliary/Auxiliary.jsx"
import Login from "./Containers/Login/Login";
import {Route, Redirect , Switch} from "react-router-dom"
import Register from "./Containers/Register/Register";
import MainLayout from "./Components/Layout/MainLayout";
import * as actions from "./Store/Action/Login.jsx";
import {connect} from "react-redux";

function App(props) {
  useEffect(()=>{
    props.onTryAutoSignup();
  },[])
  let routes = (
    <Switch>

      <Route path="/Login" exact component={Login}/>,
      <Route path="/Register" exact component={Register}/>,
      <Redirect to="/" from="/Login"/>
    </Switch>
  );
  {
    console.log(props.isAuthenticated)}
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/MainLayout" exact component={MainLayout}/>,
        <Route path="/MainLayout/Dashboard" component={MainLayout}/>,
        <Route path="/MainLayout/Bootcamp" component={MainLayout}/>,
      </Switch>
    );
  }
  return (
    <Auxiliary>
      <Switch>
        {routes}
      </Switch>
    </Auxiliary>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Login.token !== null
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
