import React,{useEffect} from "react";
import './App.css';
import Auxiliary from "./hoc/Auxiliary/Auxiliary.jsx"
import Login from "./Containers/Login/Login";
import {Route, Redirect , Switch,Router} from "react-router-dom"
import Register from "./Containers/Register/Register";
import MainLayout from "./Components/Layout/MainLayout";
import * as actions from "./Store/Action/Login.jsx";
import {useDispatch,useSelector} from "react-redux";
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
function App(props) {
  const dispatch = useDispatch()
  const Auth = useSelector(state => state.Login);

  useEffect(()=>{
    dispatch(actions?.authCheckState());
  },[dispatch])
  let routes = (
    <Router history={history}>
    <Switch>
      <Route path="/Login" exact component={Login}/>,
      <Route path="/Register" exact component={Register}/>,
      <Redirect to="/" from="/Login"/>
    </Switch>
    </Router>
  );

  if (Auth?.token) {
    routes = (
      <Router history={history}>
      <Switch>
        <Route path="/MainLayout/Dashboard" component={MainLayout}/>,
        <Route path="/MainLayout/Bootcamp" component={MainLayout}/>,
        <Route path="/MainLayout/Courses" component={MainLayout}/>,
      </Switch>
      </Router>
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
