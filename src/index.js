import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore ,applyMiddleware ,compose,combineReducers} from "redux";
import thunk from "redux-thunk";
import reportWebVitals from './reportWebVitals';
import LoginReducer from "./Store/Reducer/Login.jsx";
import GetUserReducer from "./Store/Reducer/Getuser.jsx";
import BootcampReducer from "./Store/Reducer/Bootcamp.jsx";
import CoursesReducer from "./Store/Reducer/Courses.jsx";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  Login:LoginReducer,
  Getuser:GetUserReducer,
  Bootcamp:BootcampReducer,
  courses:CoursesReducer
})
const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk)
));
const app =(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
   </Provider>
)
ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
