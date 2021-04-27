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
  const authCheck = useSelector(state => state.getLogin);

  useEffect(()=>{
    dispatch(actions?.authCheckState());
  },[dispatch])
  let routes = (
    <Router history={history}>
    <Switch>
      <Route path="/Login" exact component={Login}/>,
      <Route path="/Register" exact component={Register}/>,
      <Redirect to="/Login"/>
    </Switch>
    </Router>
  );

  if (authCheck?.token) {
    routes = (
      <Router history={history}>
      <Switch>
        <Route path="/MainLayout/Dashboard" exact component={MainLayout}/>,
        <Route path="/MainLayout/Bootcamp" exact component={MainLayout}/>,
        <Route path="/MainLayout/Courses" exact component={MainLayout}/>,
        <Redirect to="/MainLayout/Dashboard"/>
      </Switch>
      </Router>
    );
   }

  return (
    <Auxiliary>
        {routes}
    </Auxiliary>
  );
}


export default App;
