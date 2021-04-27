import axios from "axios";
import { history } from "./App.js"

const instance = axios.create({
    baseURL:"https://nodejs-dev-camper-api.herokuapp.com/api/v1/"
});

instance.interceptors.request.use((config)=>{
  const getToken = localStorage.getItem('token');
  config.headers.Authorization = getToken ? `Bearer ${getToken}` : "";
  return config;
},
  (error) => {
    return Promise.reject(error);
  }
)
instance.interceptors.response.use((response)=>{
  return response;
},(error) => {
    console.log(error)
    if (error.response.status === 401 || error.response.status === 403 ) {
      localStorage?.removeItem('token');
      localStorage?.removeItem('success');
      history.push('/Login');
    }
    return Promise.reject(error);
  }
  )
export default instance;
