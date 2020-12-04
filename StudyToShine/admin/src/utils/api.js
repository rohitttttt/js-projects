import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:6040/",
  responseType: "json"
});