import axios from "axios";

let Api = axios.create({
  baseURL: "http://localhost/api/v1/"
});

Api.defaults.withCredentials = true;

export default Api;
