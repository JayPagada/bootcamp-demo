import React,{useEffect} from "react";
import './App.css';
import Auxiliary from "./hoc/Auxiliary/Auxiliary.jsx"
import Login from "./Containers/Login/Login";
import {Route, Redirect , Switch} from "react-router-dom"
import Register from "./Containers/Register/Register";
import MainLayout from "./Components/Layout/MainLayout";
import * as actions from "./Store/Action/Login.jsx";
import {useDispatch,useSelector} from "react-redux";

function App(props) {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.Login);

  useEffect(()=>{
    dispatch(actions.authCheckState());
  },[dispatch])
  let routes = (
    <Switch>
      <Route path="/Login" exact component={Login}/>,
      <Route path="/Register" exact component={Register}/>,
      <Redirect to="/" from="/Login"/>
    </Switch>
  );

  if (auth.token) {
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


export default App;
