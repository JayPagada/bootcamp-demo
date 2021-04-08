
import './App.css';
import Auxiliary from "./hoc/Auxiliary/Auxiliary.jsx"
import Login from "./Containers/Login/Login";
import {Route, Redirect , Switch} from "react-router-dom"
import Register from "./Containers/Register/Register";
import MainLayout from "./Components/Layout/MainLayout";

function App() {
  return (
    <Auxiliary>
      <Switch>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
        <Route path="/MainLayout" component={MainLayout}/>
        <Redirect to="/Login"/>
      </Switch>
    </Auxiliary>
  );
}

export default App;
