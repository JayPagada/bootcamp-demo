import axios from "axios";

const instance = axios.create({
  baseURL:"https://nodejs-dev-camper-api.herokuapp.com/api/v1/"
})
export default instance;
